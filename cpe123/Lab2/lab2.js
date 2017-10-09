//variables
var crabScale = 1;
var waveScale = 1;

function setup() 
{
   createCanvas(700, 500);
   background(255);
}

function draw() 
{
   drawCrab();
   drawWave();
}

function drawCrab()
{
   //the body of the crab
   push();
      translate(350, 250);
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
      translate(350, 250);
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
      translate(350,250);
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
   //very little vertical movement and oscillating horizontal movement
   //the wave continues to move even when the zoom is happening
   pop();
      translate(0,300);
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