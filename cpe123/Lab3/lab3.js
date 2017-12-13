//variable
var isPressed; 

function getImpCircle(x,y,cx,cy,r)
{
   return pow((x-cx),2) + pow((y-cy),2) - pow(r,2);
}

function setup() 
{
   createCanvas(600, 400);

   //drawing background
   background(0,143,158,95);

   noStroke();
   fill(0,33,12);
   ellipse(-100,450,1400,400);
   fill(0,69,26);
   ellipse(-100,450,1300,350);
   fill(0,107,40);
   ellipse(-100,450,1200,300);

   isPressed = false;
}

function drawFlower()
{
   //flower stem
   push();
      translate(300,150);

      fill(4,135,0);
      noStroke();
      rect(-10,0,20,300);
   pop();

   //pallet of the flower
   fill(255,187,0);
   push();
      translate(300,150);
      ellipse(0,0,40,40);

      for(var i = 0; i < 9*PI/4; i++)
      {
         rotate(i*PI/4);
         beginShape();
            curveVertex(40,0);
            curveVertex(40,0);
            curveVertex(120,-20);
            curveVertex(160,0);
            curveVertex(120,20)
            curveVertex(40,0);
            curveVertex(40,0);
         endShape();
      }

      rotate(PI/8);

      for(var i = 0; i < 9*PI/4; i++)
      {
         rotate(i*PI/4);
         beginShape();
            curveVertex(40,0);
            curveVertex(40,0);
            curveVertex(120,-20);
            curveVertex(160,0);
            curveVertex(120,20)
            curveVertex(40,0);
            curveVertex(40,0);
         endShape();
      }
   pop();

   //the head of the flower
   push();
      noStroke();
      translate(300,150);   
      fill(92,51,0);
      ellipse(0,0,150);
   pop();

   //leaves of the flower
   push();   
      translate(300,350);   
      fill(4,135,0);

      beginShape();
         vertex(0,0);
         bezierVertex(40,0,40,-75,160,0);
         bezierVertex(50,80,60,25,0,0);
      endShape();

      scale(-1,1);
      beginShape();
         vertex(0,0);
         bezierVertex(40,0,40,-75,160,0);
         bezierVertex(50,80,60,25,0,0);
      endShape();
   pop();
}

function drawEye()
{
   //the pupil of the eye - bezierVertex
   push();
      translate(300,150);

      noStroke();
      fill(255);
      if(isPressed)
      {
         for(var i=0;i<100;i++)
         {
            beginShape();
               vertex(0,-70);
               bezierVertex(-0.2*i,-0.6*i,-0.2*i,0.6*i,0,70);
               bezierVertex(0.2*i,0.6*i,0.2*i,-0.6*i,0,-70);
            endShape();
         }
         fill(0);
         ellipse(0,0,30,30);
      }
      else
      {
         fill(92,51,0);
         ellipse(0,0,150);
         for(var i=100;i>1;i--)
         {
            beginShape();
               vertex(0,-70);
               bezierVertex(-0.2*i,-0.6*i,-0.2*i,0.6*i,0,70);
               bezierVertex(0.2*i,0.6*i,0.2*i,-0.6*i,0,-70);
            endShape();
         }
      }

   pop();
}

function draw() 
{
   drawFlower();
   drawEye();
}

function mousePressed()
{   
   if(getImpCircle(mouseX,mouseY,300,150,75) < 0)
   {
      isPressed = !isPressed;
   }
}