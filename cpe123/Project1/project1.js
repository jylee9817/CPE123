//variable declaration
var xMan;
var yMan;
var rotMan;
var scaleRock;
var ManDown;

var crabScale;
var waveScale;
var yCrab;
var xCrab;
var CrabMove;

function setup() 
{
   xMan = 375;
   yMan = 550;
   rotMan = 0;
   scaleRock = 1;
   ManDown = true;

   crabScale = .75;
   waveScale = .2;
   yCrab = 1250;
   xCrab = 320;
   CrabMove = true;
}

function drawMan(x, y, rot)
{
  push();
      translate(xMan,yMan)
      rotate(rot)
      fill(255, 122, 121);
        //body
        rect(-50, -65, 25, 60);
        //head
        ellipse(-35, -75, 15, 20);
        //arms
        ellipse(-48, -80, 10, 70);
        ellipse(-8, -60, 50, 10);
        ellipse(12, -72, 10, 30);
        //left leg
        ellipse(-45, 0, 10, 65);
        //right thumb
        ellipse(7, -80, 2, 5);
        //legs
        fill(255, 122, 121);
        rotate(7*PI/8)
        ellipse(25, 23, 40, 15);
        //foot
        ellipse(7, 0, 15, 5);
        ellipse(47, -10, 20, 7);
        //right leg
        ellipse(10, 13, 10, 25);
        //left thumb
        ellipse(-2, 115, 9, 3);
    pop();
}

function drawCrab()
{
   //the body of the crab
   push();
      translate(xCrab,yCrab);
      scale(crabScale);
      noStroke();
      fill(255, 40, 0);
      ellipse(0,80,100,100);

      //right eye
      rotate(PI/8);
      rect(30,0,8,30);
      
      fill(0);
      rotate(-PI/8);
      ellipse(30,5,15,30);
      
      //left eye
      fill(255, 40, 0);
      rotate(-PI/8);
      rect(-30,0,8,30);
      
      fill(0);
      rotate(PI/8);
      ellipse(-22,5,15,30);

      //left leg
      fill(255,40,0);
      rotate(-PI/3);
      rect(-60,-60,12,120);

      rotate(PI/8);
      ellipse(-70,-60,30,90);

      //right leg
      fill(255,40,0);
      rotate(-PI/8);
      rotate(2*PI/3);
      rect(60,-60,12,120);

      rotate(-PI/8);
      ellipse(85,-60,30,90);


   pop();

   //claws
   push();
      translate(xCrab, yCrab);
      scale(crabScale);
      fill(255,40,0);
      noStroke();
      
      //leff claw
      beginShape();
         curveVertex(-110,-5);
         curveVertex(-110,-5);
         curveVertex(-135,-18);
         curveVertex(-155,-50);
         curveVertex(-140,-80);
         curveVertex(-130,-45);
         curveVertex(-120,-35);
         curveVertex(-120,-35);
      endShape();

      beginShape();
         curveVertex(-120,-35);
         curveVertex(-120,-35);
         curveVertex(-120,-50);
         curveVertex(-100,-35);
         curveVertex(-120,-35);
         curveVertex(-120,-35);
      endShape();

      //right claw
      beginShape();
         curveVertex(125,0);
         curveVertex(125,0);
         curveVertex(150,-13);
         curveVertex(170,-45);
         curveVertex(155,-75);
         curveVertex(145,-40);
         curveVertex(135,-30);
         curveVertex(135,-30);
      endShape();

      beginShape();
         curveVertex(137,-28);
         curveVertex(137,-28);
         curveVertex(137,-43);
         curveVertex(117,-28);
         curveVertex(137,-28);
         curveVertex(137,-28);
      endShape();
   pop();

   push();
      noStroke();
      fill(255,40,0);
      translate(xCrab,yCrab);
      scale(crabScale);
      rect(0,80,110,10);
      rotate(PI/4);
      rect(40,60,110,10);
      rotate(4*PI/9);
      rect(50,-35,110,10);
      rotate(2*PI/7);
      rect(0,-70,110,10);

   pop();
}


function drawWave() //animate the waves
{
   pop();
      translate(0,600);
      noFill();
      strokeWeight(6);
      stroke(13,158,255);
      beginShape();
         curveVertex(0,0);
         curveVertex(0,0);
         curveVertex(100,50*waveScale);
         curveVertex(200,0);
         curveVertex(300,50*waveScale);
         curveVertex(400,0);
         curveVertex(500,50*waveScale);
         curveVertex(600,0);
         curveVertex(700,50*waveScale);
         curveVertex(700,50*waveScale);
      endShape();

   push();
}


function draw()
{
   createCanvas(600, 700);
   background(255);
   noStroke();
   frameRate(5);

   fill(113, 198, 255);
   triangle(600, 700, 200, 700, 600, 300);
   fill(255); 
      
   push();
      translate(400, 400);
      rotate(7*PI/4);
      ellipse(-130, 60, 127, 45);
      ellipse(0, 80, 127, 45);
      fill(113, 198, 255);
   pop();
   
   //rock 
   push();
      translate(400, 400);
      scale(scaleRock);
      fill(237, 147, 11);
      ellipse(8, 15, 175, 175);
   pop();
   
   drawMan(xMan, yMan, rotMan);
   drawWave();
   drawCrab();

   if(ManDown)
   {
      rotMan -= PI/50;
      xMan -= 1;
      yMan +=2;
   }
   if(CrabMove)
   {
      yCrab -= 50;
   }    
   if (yMan >= 600 && yCrab <= 800 )
   {
      CrabMove = false;
      ManDown = false;
      xMan +=10;
      xCrab += 10;
   }
    
}
