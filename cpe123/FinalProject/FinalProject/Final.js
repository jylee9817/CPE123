var yes = true;
var scene = 1;
var tx = 0;
var shark_x = -500;
var crazyX = [];
var crazyY = [];
var hatred = true;
var munch = 0;
var gogo_bite = true;
var gogo_danger = 1;
var okay = true
var counter = 0

//System
var gameStart;
var gameEnd;
var enemyAttack;
var deadFish;
var radius;

//Shark(main)
var sharkLoc = [];
var sharkDir = [];
var sharkRot;
var sharkLife;
var sharkSize, maxSize;
var sharkR; //radius for shark hisbox

//Goldfish(boss)
var goldSize;
var goldRot;

var goldDir = [];
var goldLoc = [];

var goldR //radius for goldfish hitbox

//Regular Enemies (shrimp and fish)
var fishNum;
var eatShrimp, eatFish;
var shrimpSize, fishSize;

var shrimpDir = [];
var shrimpLoc = [];
var shirmpR; //radius for shrimp hitbox

var fishDir = [];
var fishLoc = [];
var fishR; //radius for fish hitbox

function Particle(x , y) {
   flames = random(0, 3)
   //this.accelY = 0.05; //gravity
   this.velX = random(-2, 2);
   this.velY = random(-2, 2);

   this.pcolorR = 255;
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 150;
  
   this.updateP = function() {
         //this.velY += this.accelY;
         this.locX += this.velX;
         this.locY += this.velY;
         this.life -= 1.0;
   };

   this.renderP = function() 
   {
      noStroke();
      push(); 
            strokeWeight(4);
            stroke(this.pcolorR, 0, 0, 255 * this.life/15);
            fill(this.pcolorR, 0, 0, 255 * this.life/15);

            ellipse(this.locX, this.locY, this.r);
      pop();
   };


}

function PSys(sX, sY, num) {
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY));
   }
  
   this.run = function() {
      for (var i=0; i < this.particles.length; i++) {
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }

}

function preload() {
   img1 = loadImage("Saturn.png");
   img2 = loadImage("Earth.png");
   img3 = loadImage("Sun.png");
   img4 = loadImage("Moon.png")
   img5 = loadImage("Earth.png");
   img6 = loadImage("oval_office.jpg")
}

function setup() {
   createCanvas(800, 800)

   earth_explosion = new PSys(200 + 50, 350 + 50, 50);

   for(y = 0; y < height; y += 10) {
      for(x = 0; x < width; x += 10) {
         crazyX.push(random(-20, 20));
         crazyY.push(random(-20, 20));
      }
   }

   noStroke();

   fishNum = 5;
   for (var i=0; i<fishNum; i++)
   {
      shrimpLoc.push(createVector(random(30,height-30),random(30,width-30)));
      shrimpDir.push(createVector(random(2,3),0));
      
      fishLoc.push(createVector(random(30,height-30),random(30,width-30)));
      fishDir.push(createVector(random(2,3),0));
   }

   //System Setting
   maxSize = false;
   deadFish = false;
   gameStart = false;
   gameEnd = false;
   radius = 2;

   sharkR, goldR, fishR, shrimpR = 0;

   //Shark Status
   sharkLoc = createVector(width/2, height/2);
   sharkDir = createVector();
   sharkRot = 0;
   sharkSize = 1;
   sharkLife = 3;

   //Enemy Status
   shrimpSize = 0.1;
   fishSize = 0.3;
   
   //Goldfish Status
   goldDir = createVector();
   goldLoc = createVector();
   goldSize = 9;

   noCursor();
}

function draw(){
   background(255, 255, 0);  

   //if(scene == 0)
      //Scene0();

   //else 
   
    if(scene == 1)
      Scene1();

   else if(scene == 2)
      Scene2();

   else if(scene == 3)
      Scene3();

   else if(scene == 4)
      Scene4();

   else if(scene == 5)
      Scene5();

   else if(scene == 6)
      Scene6();

   else if(scene == 7)
      Scene7();

   else if(scene == 8)
      Scene8();

   else if(scene == 9)
      Scene9();

   else if(scene == 10)
      Scene10();

   else if(scene == 11)
      Scene11();

   else if(scene == 12)
      Scene12();

   else if(scene == 13)
      Scene13();

   else if(scene == 14)
      Scene14();

   else if(scene == 15)
      Scene15();

   else if(scene == 16) {
      okay = false
      Start();
   }    

   else if(scene == 17)
      Scene16();
      
   else if(scene == 18)
      Scene17();
      

   else if(scene == 19)
      Scene18();
      
   else if(scene == 20)
      Scene19();

   else if(scene ==21)
      Scene20();
}

function danger(x, y) {
   push();
      translate(x, y);
      strokeWeight(8)
      stroke(255, 0, 0);
      fill(255, 255, 0);
      triangle(0, -50, -40, 0, 40, 0);
      ellipse(0, -12, 4);
      ellipse(0, - 30, 4, 12);
   pop();
}

function drawTextBox() {
   stroke(128);
   strokeWeight(15);
   fill(0);
   rect(0 + 14/2, 2*height/3, width - 15, 1/3*height - 15/2);
}

function drawFishBowl(x, y, scl, rot) {
   push();
      translate(x, y);
      scale(scl);
      rotate(rot);

      stroke(0);
      strokeWeight(5);
      fill(0, 0, 255);
      arc(0, 20, 20, 15, 31*PI/16, 17*PI/16);

      strokeWeight(3)
      fill(255, 255, 255, 0)
      arc(0, 13, 18, 10, 0, PI);
      line(-9.5, 12, 8.5, 12)
   pop();
}

function drawTube (x, y, scl, rot) {
   push();
      translate(x, y)
      scale(scl)
      rotate(rot)

      fill(0, 0, 255);
      rect(-9.5, 23, 18, 40)
      //top cap
      noStroke();
      fill(128, 128, 128);
      rect(-9.5,12, 18, 12)
      strokeWeight(3)
      stroke(0)
      arc(0, 13, 18, 10, 0, PI);
      arc(0, 23, 18, 10, 0, PI);
      line(-9.5, 12, 8.5, 12);
      line(-9.5, 13, -9.5, 23);
      line(8.5, 13, 8.5, 23);
      

      //bottom cap
      noStroke();
      rect(-9.5, 57, 18, 8)
      strokeWeight(3)
      stroke(0)
      noFill();
      arc(0, 53, 18, 10, 0, PI);
      fill(128, 128, 128);
      arc(0, 63, 18, 10, 0, PI);
      line(-9.5, 53, -9.5, 63);
      line(8.5, 53, 8.5, 63);
   pop();
}

function drawLand() {
   noStroke();
   fill(0, 0, 189);
   rect(0, 0, width, height);

   fill(0, 0, 255);
   ellipse(width/2, height/2 + 300, 700, 1600)

   fill(0, 255, 0);

   drawGrass();

   push();
         translate(600, 0)
         scale(5/8);
         rotate(PI/4)
         fill(0, 200, 0)
         drawGrass();
   pop();

   push();
      translate(-400, -400)
      scale(2);
      fill(118, 125, 121);
      beginShape();
         vertex(329, 381);
         vertex(329, 381);
         vertex(366, 401);
         vertex(393, 398);
         vertex(426, 398);
         vertex(426, 508);
         vertex(329, 508);
         vertex(329, 381);
         vertex(329, 381);
      endShape();
   pop();

   push();
         translate(-400, 0)
         rotate(-PI/6)
         scale(2);
         fill(118, 125, 121);
         beginShape();
         vertex(329, 381);
         vertex(329, 381);
         vertex(366, 401);
         vertex(393, 398);
         vertex(426, 398);
         vertex(426, 208);
         vertex(329, 208);
         vertex(329, 381);
         vertex(329, 381);
      endShape();
    pop();
}

function drawGrass() {
   beginShape();
      curveVertex(228, height);
      curveVertex(228, height);      
      curveVertex(230, 536);
      curveVertex(217, 476);
      curveVertex(270, 492);
      curveVertex(257, 458);
      curveVertex(212, 422);
      curveVertex(163, 381);
      curveVertex(178, 338);
      curveVertex(194, 332);
      curveVertex(252, 315);
      curveVertex(295, 293);
      curveVertex(344, 264);
      curveVertex(368, 220);
      curveVertex(349, 204);
      curveVertex(335, 183);
      curveVertex(337, 148);
      curveVertex(365, 127);
      curveVertex(458, 79);
      curveVertex(540, 32);
      curveVertex(587, 3);
      curveVertex(593, 0);
      curveVertex(width, 0);
      curveVertex(width, height);
      curveVertex(228, height);
      curveVertex(228, height);
   endShape();
}

function drawFish(x,y,sc, rot) {
   noStroke()
   push()
      translate(x,y)
      scale(sc)
      rotate(rot)
      fill(255,168,0,150)
      triangle(5,20,-10,15,-10,28)
      triangle(-40,0,-40,10,-20,0)
   
      push()
         rotate(-PI/6)
         rect(-21,-21,40,25)
      pop()

      push()
         translate(-35,0)
         rotate(2*PI/3)
         ellipse(0,10,10,25)
      pop()

      push()
         translate(-35,0)
         rotate(-2*PI/3)
         ellipse(0,-10,10,25)
      pop()

      fill(255,128,0)
      ellipse(0,0,40)
      ellipse(0,0,60,40)
      ellipse(-20,0,40,16)
      ellipse(-15,0,30,20)
   
      fill(255)
      ellipse(10,-10,10)

      fill(0)
      ellipse(12,-10,6)
   pop()   
}

function drawMonsterFish(x,y,sc, rot, flip) {
   noStroke()
   push()
      translate(x,y)
      scale(sc)
      rotate(rot)
      fill(255,168,0,150)
      triangle(flip * 5,20,flip *-10,15,flip *-10,38)
      triangle(flip *-40,0,flip *-40,10,flip *-20,0)
   
      push()
         if(flip == 1) {
            rotate(-PI/4)
            rect(-21,-25,40, 25)
         }
         if(flip == -1) {
            rotate(-PI/4)
            rect(11,-25,-10, 25)
         }
      pop()

      push()
         translate(flip *-35,0)
         rotate(flip *2*PI/3)
         ellipse(0,10,10,25)
      pop()

      push()
         translate(flip *-35,0)
         rotate(flip *-2*PI/3)
         ellipse(0,-10,10,25)
      pop()

      fill(255,128,0)
      if(flip == 1) {
         arc(10,0,80,50, PI, 2* PI - PI/6 + munch/2)
         arc(10,0,80,50, PI/6- munch/2, PI)
      }
      if(flip == -1) {
         arc(flip *10,0,80,50, PI + PI/6 - munch/2, 2 * PI )
         arc(flip *10,0,80,50, 0 , PI - PI/6+ munch/2)
      }
      ellipse(flip *-20,0,40,16)
      ellipse(flip *-15,0,30,20)
   
      fill(0)
      ellipse(flip *10,-10,10)

   
      push()
         fill(128)
         translate(flip *10, 0)
         scale(.8)
         rotate(-PI/6 + munch/2)

         if(munch > PI/4) {
            tx = flip*10
            for(var i = 0; i < 4; i++) {
               triangle(flip *0 + tx, 0,flip * 5 + tx, flip *5,flip * 10 + tx, 0)
               tx += flip *10;
            }
            tx = flip *10;
            rotate(PI/3 - munch)
            for(var i = 0; i < 4; i++) {
               triangle(flip *0 + tx, 0,flip * 5 + tx, flip *-5,flip * 10 + tx, 0)
               tx += flip *10;
            }
         }
         else {
            for(var i = 0; i < 4; i++) {
               triangle(flip *0 + tx, 0,flip * 5 + tx, flip *5,flip * 10 + tx, 0)
               tx += flip *10;
            }
            tx = flip *10;
            rotate(PI/3 - munch)
            for(var i = 0; i < 3; i++) {
               triangle(flip *0 + tx, 0,flip * 5 + tx, flip *-5,flip * 10 + tx, 0)
               tx += flip *10;
            }
            
       }
       tx = 0;
      pop()
   pop()
}
function drawShark(x,y,sc, rot){
   noStroke()
   push()
      translate(x,y)
      scale(sc)
      rotate(rot)

      fill(128)
      ellipse(0,0,80,40)
      push()
         translate(-5,-10)
         rotate(-PI/6)
         ellipse(0,0,80,35)
         triangle(-5,-15,10,-15,-5,-30)
         translate(50,5)
         rotate(-PI/36)
         ellipse(0,0,80,40)
         translate(0,20)
         //top jaw
            ellipse(0,0,60,10)

      pop()
      translate(50,15)
      ellipse(-15,-10,20)
      push()
         rotate(PI/15)
         //bottom jaw
         ellipse(0,0,55,10)
         triangle(-30,0,-12,0,-12,20)
      pop()
      translate(-50,-15)
      triangle(-10,35,0,0,30,0)
      triangle(-40,0,-40,20,-25,0)
      triangle(-35,0,-70,-20,-50,0)
      triangle(-50,0,-65,30,-30,0)
   pop()
   push()
      translate(x,y)
      scale(sc)
      rotate(rot)
      fill(255)
      ellipse(20,-20,15)
      fill(0)
      ellipse(22,-20,10)
   pop()
}

function drawSharkBoi(x,y,sc, rot){
   noStroke()
   push()
      translate(x,y)
      scale(sc)
      rotate(rot)

      fill(128)
      ellipse(0,0,80,40)
      push()
         translate(-5,-10)
         rotate(-PI/6)
         ellipse(0,0,80,35)
         triangle(-5,-15,10,-15,-5,-30)
         translate(50,5)
         rotate(-PI/36)
         ellipse(0,0,80,40)
         translate(0,20)
         //top jaw
         push()
            rotate(munch/3)
            translate(1/10 - munch * 5, 1/10 + munch * 3);
            ellipse(0,0,60 ,10 + munch * 2)
         pop();
      pop()
      translate(50,15)
      ellipse(-15,-10,20)
      push()
         translate(1/10 - munch * 6, 1/10 - munch * 7);
         //rotate(PI/15 - munch/3)
         //bottom jaw
         ellipse(0,0,55 - 1/10 - munch * 10 ,10)
      pop()
      triangle(-30,0,-12,0,-12,20)
      translate(-50,-15)
      triangle(-10,35,0,0,30,0)
      triangle(-40,0,-40,20,-25,0)
      triangle(-35,0,-70,-20,-50,0)
      triangle(-50,0,-65,30,-30,0)
   pop()
   push()
      translate(x,y)
      scale(sc)
      rotate(rot)
      fill(255)
      ellipse(20,-20,15)
      fill(0)
      ellipse(22,-20,10)
   pop()

   push()   
      translate(x, y)
      scale(sc)
     rotate(rot)
      fill(128)
      rotate(-PI/4)
      ellipse(23, 25, 40, 25);
   pop()
}

function drawBoat() {
   push()
      translate(-80, 50)
      rotate(-PI/12)

      fill(200);
      noStroke();

      beginShape();
         vertex(-100, height/2)
         vertex(400, height/2)
         vertex(300, height/2 + 200)
         vertex(-100, height/2+ 200)
      endShape();

      fill(255, 0, 0);
      beginShape();
         vertex(-100, height/2)
         vertex(450, height/2)
         vertex(475, height/2 - 50)
         vertex(-100, height/2 - 50)
      endShape();

      fill(128)
      beginShape();
         vertex(-100, height/2 - 50)
         vertex(-100, height/2 - 50)
         vertex(125, height/2 - 50)
         vertex(125, height/2 - 125)
         vertex(100, height/2 - 150)
         vertex(-100, height/2 - 150)
         vertex(-100, height/2 - 150)
      endShape()

      fill(100)
      beginShape();
         vertex(-100, height/2 - 150)
         vertex(-100, height/2 - 150)
         vertex(50, height/2 - 150)
         vertex(50, height/2 - 200)
         vertex(-100, height/2 - 200)
      endShape()

   pop()
}

function drawDoc(x,y,rot,sc){
   //noStroke();
   push();
      translate(x,y)
      rotate(rot)
      scale(sc)

      fill(240, 189, 175)
      ellipse(0, -100, 60)//head
      fill(255)
      ellipse(12, -105, 12)//eyes
      ellipse(-12, -105, 12)
      fill(0, 200, 128)
      ellipse(12, -105, 5)//pupils
      ellipse(-12, -105, 5)

      fill(200)
      ellipse(-12, -113, 5)
      ellipse(-10, -113, 5)
      ellipse(-8, -113, 5)
      ellipse(-14, -113, 5)

      ellipse(12, -113, 5)
      ellipse(10, -113, 5)
      ellipse(8, -113, 5)
      ellipse(14, -113, 5)

      ellipse(6, -89, 4)
      ellipse(4, -89, 4)
      ellipse(2, -89, 4)
      ellipse(0, -89, 4)
      
      ellipse(-6, -89, 4)
      ellipse(-4, -89, 4)
      ellipse(-2, -89, 4)
      ellipse(0, -89, 4)

      ellipse(-20,-125,15)
      ellipse(20,-125,15)
      ellipse(-13,-128,15)
      ellipse(13,-128,15)
      ellipse(-6,-131,15)
      ellipse(6,-131,15)

      fill(0)

      rect(-12, -84, 24, 2)
      ellipse(4, -92, 2)
      ellipse(-4, -92, 2)

      fill(0)
      ellipse(-20, 110, 30, 125)//left leg
      ellipse(20, 110, 30, 125)//right leg
      fill(240, 189, 175)

      push();
         rotate(-PI/4)
         ellipse(-10, -40, 105, 25)//left arm
         fill(255)
         ellipse(-10, -40, 75, 25)
      pop();

      fill(158, 83, 41)
      ellipse(-28, 169, 30, 10)
      ellipse(28, 169, 30, 10)


      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(45, 10, 25, 105)//right arm
         fill(255)
         ellipse(45, 10, 25, 75)
      pop();

      fill(0,0,255,255)
      ellipse(0,0, 75, 150)//body
      fill(255)
      ellipse(20, 0, 35, 130)
      ellipse(-20, 0, 35, 130)
   pop();
}

function drawBoy(x,y,rot,sc){
   noStroke();
   push();
      translate(x,y)
      rotate(rot)
      scale(sc)

      fill(240, 189, 175)
      ellipse(0, -100, 60)//head
      fill(255)
      ellipse(12, -105, 12)//eyes
      ellipse(-12, -105, 12)
      fill(192, 105, 58)
      ellipse(12, -105, 5)//pupils
      ellipse(-12, -105, 5)

      fill(142,65, 28)
      ellipse(-16, -113, 5)
      ellipse(-14, -113, 5)
      ellipse(-12, -113, 5)
      ellipse(-10, -113, 5)

      ellipse(16, -113, 5)
      ellipse(14, -113, 5)
      ellipse(12, -113, 5)
      ellipse(10, -113, 5)

      ellipse(-20,-125,15)
      ellipse(20,-125,15)
      ellipse(-13,-128,15)
      ellipse(13,-128,15)
      ellipse(-6,-131,15)
      ellipse(6,-131,15)
      ellipse(0, -134, 15)
      ellipse(-27, -122, 15)
      ellipse(27, -122, 15)

      ellipse(-20,-132,15)
      ellipse(20,-132,15)
      ellipse(-13,-132,15)
      ellipse(13,-132,15)
      ellipse(-6,-132,15)
      ellipse(6,-132,15)
      ellipse(0, -136, 15)
      ellipse(-27, -132, 15)
      ellipse(27, -132, 15)

      ellipse(-20,-135,15)
      ellipse(20,-135,15)
      ellipse(-13,-135,15)
      ellipse(13,-135,15)
      ellipse(-6,-135,15)
      ellipse(6,-135,15)
      ellipse(0, -135, 15)
      ellipse(-27, -135, 15)
      ellipse(27, -135, 15)

      ellipse(-20,-140,15)
      ellipse(20,-140,15)
      ellipse(-13,-140,15)
      ellipse(13,-140,15)
      ellipse(-6,-140,15)
      ellipse(6,-140,15)
      ellipse(0, -140, 15)
      ellipse(-27, -140, 15)
      ellipse(27, -140, 15)

      fill(0)

      rect(-12, -84, 24, 2)
      rect(-12, -86, 2, 2)
      rect(10, -86, 2, 2)
      ellipse(4, -92, 2)
      ellipse(-4, -92, 2)
       
      fill(0,0,255)
      ellipse(-20, 110, 30, 125)//left leg
      ellipse(20, 110, 30, 125)//right leg
      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(-10, -40, 105, 25)//left arm
         fill(240, 189, 175)
         ellipse(-10, -40, 75, 25)
      pop();

         fill(158, 83, 41)
         ellipse(-28, 169, 30, 10)
         ellipse(28, 169, 30, 10)

      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(45, 10, 25, 105)//right arm
      pop();

      fill(255,0,0)
      ellipse(0, 0, 60, 150)

   pop();
}

function drawSadBoy(x,y,rot,sc){
   noStroke();
   push();
      translate(x,y)
      rotate(rot)
      scale(sc)

      fill(240, 189, 175)
      ellipse(0, -100, 60)//head
      fill(255)
      ellipse(12, -105, 12)//eyes
      ellipse(-12, -105, 12)
      fill(192, 105, 58)
      ellipse(12, -105, 5)//pupils
      ellipse(-12, -105, 5)

      fill(142,65, 28)
      ellipse(-16, -113, 5)
      ellipse(-14, -113, 5)
      ellipse(-12, -113, 5)
      ellipse(-10, -113, 5)

      ellipse(16, -113, 5)
      ellipse(14, -113, 5)
      ellipse(12, -113, 5)
      ellipse(10, -113, 5)

      ellipse(-20,-125,15)
      ellipse(20,-125,15)
      ellipse(-13,-128,15)
      ellipse(13,-128,15)
      ellipse(-6,-131,15)
      ellipse(6,-131,15)
      ellipse(0, -134, 15)
      ellipse(-27, -122, 15)
      ellipse(27, -122, 15)

      ellipse(-20,-132,15)
      ellipse(20,-132,15)
      ellipse(-13,-132,15)
      ellipse(13,-132,15)
      ellipse(-6,-132,15)
      ellipse(6,-132,15)
      ellipse(0, -136, 15)
      ellipse(-27, -132, 15)
      ellipse(27, -132, 15)

      ellipse(-20,-135,15)
      ellipse(20,-135,15)
      ellipse(-13,-135,15)
      ellipse(13,-135,15)
      ellipse(-6,-135,15)
      ellipse(6,-135,15)
      ellipse(0, -135, 15)
      ellipse(-27, -135, 15)
      ellipse(27, -135, 15)

      ellipse(-20,-140,15)
      ellipse(20,-140,15)
      ellipse(-13,-140,15)
      ellipse(13,-140,15)
      ellipse(-6,-140,15)
      ellipse(6,-140,15)
      ellipse(0, -140, 15)
      ellipse(-27, -140, 15)
      ellipse(27, -140, 15)

      fill(0)

     rect(-12, -84, 24, 2)
      rect(-12, -82, 2, 2)
      rect(10, -82, 2, 2)
      ellipse(4, -92, 2)
      ellipse(-4, -92, 2)
       
      fill(0,0,255)
      ellipse(-20, 110, 30, 125)//left leg
      ellipse(20, 110, 30, 125)//right leg
      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(-10, -40, 105, 25)//left arm
         fill(240, 189, 175)
         ellipse(-10, -40, 75, 25)
      pop();

         fill(158, 83, 41)
         ellipse(-28, 169, 30, 10)
         ellipse(28, 169, 30, 10)

      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(45, 10, 25, 105)//right arm
      pop();

      fill(255,0,0)
      ellipse(0, 0, 60, 150)

   pop();
}

function drawScaredBoy(x,y,rot,sc){
   noStroke();
   push();
      translate(x,y)
      rotate(rot)
      scale(sc)

      fill(240, 189, 175)
      ellipse(0, -100, 60)//head
      fill(255)
      ellipse(12, -105, 12)//eyes
      ellipse(-12, -105, 12)
      fill(192, 105, 58)
      ellipse(9, -105, 5)//pupils
      ellipse(-15, -105, 5)

      fill(142,65, 28)
      ellipse(-16, -113, 5)
      ellipse(-14, -113, 5)
      ellipse(-12, -113, 5)
      ellipse(-10, -113, 5)

      ellipse(16, -113, 5)
      ellipse(14, -113, 5)
      ellipse(12, -113, 5)
      ellipse(10, -113, 5)

      ellipse(-20,-125,15)
      ellipse(20,-125,15)
      ellipse(-13,-128,15)
      ellipse(13,-128,15)
      ellipse(-6,-131,15)
      ellipse(6,-131,15)
      ellipse(0, -134, 15)
      ellipse(-27, -122, 15)
      ellipse(27, -122, 15)

      ellipse(-20,-132,15)
      ellipse(20,-132,15)
      ellipse(-13,-132,15)
      ellipse(13,-132,15)
      ellipse(-6,-132,15)
      ellipse(6,-132,15)
      ellipse(0, -136, 15)
      ellipse(-27, -132, 15)
      ellipse(27, -132, 15)

      ellipse(-20,-135,15)
      ellipse(20,-135,15)
      ellipse(-13,-135,15)
      ellipse(13,-135,15)
      ellipse(-6,-135,15)
      ellipse(6,-135,15)
      ellipse(0, -135, 15)
      ellipse(-27, -135, 15)
      ellipse(27, -135, 15)

      ellipse(-20,-140,15)
      ellipse(20,-140,15)
      ellipse(-13,-140,15)
      ellipse(13,-140,15)
      ellipse(-6,-140,15)
      ellipse(6,-140,15)
      ellipse(0, -140, 15)
      ellipse(-27, -140, 15)
      ellipse(27, -140, 15)

      fill(255, 88, 158)

      ellipse(0, -84, 20, 10)
      //rect(-12, -84, 24, 2)
      //rect(-12, -86, 2, 2)
      //rect(10, -86, 2, 2)

      fill(0)
      ellipse(4, -92, 2)
      ellipse(-4, -92, 2)
       
      fill(0,0,255)
      ellipse(-20, 110, 30, 125)//left leg
      ellipse(20, 110, 30, 125)//right leg
      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(-10, -40, 105, 25)//left arm
         fill(240, 189, 175)
         ellipse(-10, -40, 75, 25)
      pop();

         fill(158, 83, 41)
         ellipse(-28, 169, 30, 10)
         ellipse(28, 169, 30, 10)

      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(45, 10, 25, 105)//right arm
      pop();

      fill(255,0,0)
      ellipse(0, 0, 60, 150)

   pop();
}

function drawPres(x,y,rot,sc){
   //noStroke();
   push();
      translate(x,y)
      rotate(rot)
      scale(sc)

      fill(240, 189, 175)
      ellipse(0, -100, 60)//head
      fill(255)
      ellipse(12, -105, 12)//eyes
      ellipse(-12, -105, 12)
      fill(0, 191, 255)
      ellipse(12, -105, 5)//pupils
      ellipse(-12, -105, 5)

      fill(192,105, 58)
      ellipse(-12, -113, 5)
      ellipse(-10, -113, 5)
      ellipse(-8, -113, 5)
      ellipse(-14, -113, 5)

      ellipse(12, -113, 5)
      ellipse(10, -113, 5)
      ellipse(8, -113, 5)
      ellipse(14, -113, 5)

      ellipse(-20,-125,15)
      ellipse(20,-125,15)
      ellipse(-13,-128,15)
      ellipse(13,-128,15)
      ellipse(-6,-131,15)
      ellipse(6,-131,15)
      ellipse(0, -134, 15)
      ellipse(-27, -122, 15)
      ellipse(27, -122, 15)


      fill(0)

      rect(-12, -84, 24, 2)
      ellipse(4, -92, 2)
      ellipse(-4, -92, 2)

       

      fill(0)
      ellipse(-20, 110, 30, 125)//left leg
      ellipse(20, 110, 30, 125)//right leg
      fill(240, 189, 175)
      ellipse(-45, -50, 105, 25)//left arm
      fill(0)
      ellipse(-45, -50, 75, 25)

      fill(158, 83, 41)
      ellipse(-28, 169, 30, 10)
      ellipse(28, 169, 30, 10)


      push();
         rotate(-PI/4)
         fill(240, 189, 175)
         ellipse(45, 10, 25, 105)//right arm
         fill(0)
         ellipse(45, 10, 25, 75)
      pop();

      fill(255)
      ellipse(0,0, 75, 150)//body
      fill(0)
      ellipse(20, 0, 35, 130)
      ellipse(-20, 0, 35, 130)
     rect(-20, -50, 40, 120)
     fill(255)
     triangle(-15, -50, 15, -50, 0, 70)
     fill(231, 174, 36)
     ellipse(-15, -35, 3)
     ellipse(-14, -20, 3)
     ellipse(-13, -5, 3)
     ellipse(15, -35, 3)
     ellipse(14, -20, 3)
     ellipse(13, -5, 3)
   pop();
}

function Scene1Background() {
   //stroke(0);
   //strokeWeight(1);
   noStroke();

   fill(136, 140, 205);
   triangle(-10, - 10, 200, -10, 0, height + 10);
   fill(125, 124, 108);
   triangle(200, -10, 0, height + 10, 400, height + 10);
   fill(49, 56, 64);
   triangle(400, height + 10, 200, -10, 350, 0);
   fill(224, 221, 200);
   triangle(400, height + 100, 700, -10, 350, 0);
   fill(228, 229, 199);
   triangle(400, height + 100, 700, -10, 800, 0);
   fill(96, 110, 115);
   triangle(400, height + 100, 800, height + 10, 800, 0);
}

function textScene1(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Boy:", 50, 600)
   text("I want a fish!", 50, 650)
   
   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene2(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Scientist:", 50, 600)
   text("How about a goldfish?", 50, 650)

   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene3(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Boy:", 50, 600)
   text("I'll take it!", 50, 650)
   
   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene4(){
   noStroke();
   fill(255, 0, 0);
   textSize(30);
   textFont("Arial");
   text("Don't Overfeed!", 550, 480)
}

function textScene5(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Boy:", 50, 600)
   text("Hey! Eat a lot and grow more!", 50, 650)

   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene6(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Boy:", 50, 600)
   text("Woah...that's a bit too big!", 50, 650)

   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene9(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("President:", 50, 600)
   text("What should we do?!", 50, 650)
   
   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene10(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("President:", 50, 600)
   text("What should we do?!", 50, 650)
   
   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene11(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Scientist:", 50, 600)
   text("I have a Solution!", 50, 650)
   
   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene14(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Scientist:", 50, 600)
   text("The nano shark will get bigger", 50, 650)
   text("and eat the goldfish!", 50, 700)
   
   textSize(24)
   frameRate(2);
   if(yes) {
      fill(255);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
   else {
      fill(0);
      text("click to continue", width - 200, 775)
      yes = !yes
   }
}

function textScene15(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("Scientist:", 50, 600)
   text("Go now Lock Jaw!", 50, 650)
   
   textSize(50)
   frameRate(2);
   if(yes) {
      fill(random(255), random(255), random(255));
      text("Begin Game", width/2 - 125, 725)
      yes = !yes
   }
   else {
      fill(0);
      text("Begin Game", width/2 - 125, 725)
      yes = !yes
   }
}

function textScene20(){
   noStroke();
   fill(255);
   textSize(50);
   textFont("Arial");
   text("The End", 350, 100)
}

function Scene0() {
   fill(0);
   rect(0, 0, width, height);
}

function Scene1() {
   Scene1Background()
   drawBoy(200, 450, 0, 1);
   drawDoc(600, 400, 0, 1.5);
   drawTextBox();
   textScene1();
}

function Scene2() {
   Scene1Background()
   drawBoy(200, 450, 0, 1);
   drawDoc(600, 400, 0, 1.5);
   drawTextBox();
   textScene2();
   drawFishBowl(width/2, 400, 4, 0)
   drawFish(400, 490, .3, 0)
}

function Scene3() {
   Scene1Background()
   drawBoy(200, 450, 0, 1);
   drawDoc(600, 400, 0, 1.5);
   drawTextBox();
   textScene3();
   drawFishBowl(350, 360, 4, PI/4)
   drawFish(296, 425, .3, PI/4)
}

function Scene4() {
   frameRate(2);
   Scene1Background()
   textScene4();
   drawFishBowl(-400, -400, 60, -PI/4);
   drawFish(width/2, height/2 + 200, 3, -PI/8);

   if(gogo_danger == 1) {
         danger(500, 500);
         gogo_danger = 0
   }
      else
         gogo_danger++

   textScene4();
}

function Scene5() {
   Scene1Background()
   drawBoy(500, 450, 0, 1);
   drawTextBox();
   textScene5();
   drawFishBowl(300, 400, 4, 0)
   drawFish(300, 490, .3, 0)
}

function Scene6() {
   Scene1Background()
   drawSadBoy(200, 450, 0, 1);
   drawTextBox();
   textScene6();
   drawFishBowl(300, 400, 4, 0)
   drawFish(330, 420, 2, -PI/3.5)
}

function Scene7() {
   Scene1Background()
   drawScaredBoy(700, 400, 0, 1.5);
   drawMonsterFish(300, 420, 5, 0, 1)
   fill(0, 0, 255, 128)
   rect(0, 320, width, 500)
}

function Scene8() {
   drawLand();


   drawMonsterFish(200, 420, 5, -PI/8, 1)

   if(munch > PI/3 || munch < 0)
         gogo_bite = !gogo_bite

      if(gogo_bite)
         munch += PI/3/12
      else
         munch -= PI/3/12
}

function Scene9() {
   fill(0, 128, 255);
   rect(0, 0, width, height)
   drawBoat();
   drawMonsterFish(600, 300, 10, -PI/8, -1)
   drawWhale(600, 700, 1);
   fill(0, 100, 255, 128)
   rect(0, 500, width, 500)

   
   if(munch > PI/3 || munch < 0)
         gogo_bite = !gogo_bite

      if(gogo_bite)
         munch += PI/3/12
      else
         munch -= PI/3/12
   //textScene9();
}

function Scene10() {
   fill(255, 255, 0)
   rect(0, 0, width, height)
   image(img6, 0, 0, width, height);
   drawDoc(600, 400, 0, 1.25)
   drawPres(175, 400, 0, 1)
   drawTextBox();
   textScene10();
   
}

function Scene11() {
   fill(255, 255, 0)
   rect(0, 0, width, height)
   image(img6, -2* width, -1*height, 3*width, 3*height);
   drawDoc(300, 700, 0, 5)
   drawTextBox();
   textScene11();
}

function Scene12() {
   image(img6, -7*width, -5*height, 10*width, 10*height);
   drawTube(900, -100, 17, PI/4)
   fill(128)
   ellipse(width/2, height/2, 15, 10)
}

function Scene13() {
   fill(0, 0, 255)
   rect(0, 0, width, height)
   drawShark(400, 600, 4, 0)
}

function Scene14() {
   fill(255, 255, 0)
   rect(0, 0, width, height)
   image(img6, -2* width, -1*height, 3*width, 3*height);
   drawDoc(600, 700, 0, 5)
   //drawTube(110, 360, 2, 0)
   drawTextBox();
   textScene14();
}

function Scene15() {
   fill(0, 0, 255)
   rect(0, 0, width, height)
   drawShark(400, 300, 4, 0)
   drawTextBox();
   textScene15();
}

function Scene16() {
   fill(0, 0, 255);
   rect(0, 0, width, height)
   drawMonsterFish(600, 420, 5, 0, -1)
   
   drawShark(shark_x, 420, 8, 0);

   if(shark_x < -100)
      shark_x += 4;
}

function Scene17() {
   fill(0, 0, 255);
   rect(0, 0, width, height)

   if(shark_x < 600)
      drawMonsterFish(600, 420, 5, 0, -1)
   else
      rect(0, 0, width, height)
   
   drawShark(shark_x, 420, 8, 0);

   if(shark_x < 1400)
      shark_x += 20;
}

function Scene18() {
   fill(0)
   rect(0, 0, width, height)
   var i = 0
   for(var y = 0; y < height; y += 20) {
      for(var x = 0; x < width; x += 20) {
         fill(255);

         ellipse(x + crazyX[i], y + crazyY[i], 2);
         i++;
      }
   }

   image(img2, 100, 100)

   drawShark(120, 380, 2.5, -PI/2)


}

function Scene19() {

   fill(0)
   rect(0, 0, width, height)
   var i = 0;
   for(var y = 0; y < height; y += 20) {
      for(var x = 0; x < width; x += 20) {
         fill(255);

         ellipse(x + crazyX[i], y + crazyY[i], 2);
         i++;
      }
   }

   image(img5, 335, 220, 250, 250)

   loadPixels();
 
   for (var i = 0; i < pixels.length; i+=4) {
         if(hatred) {
            if (pixels[i] < 10 && pixels[i+1] > 100 && pixels[i+2] < 10) {
               pixels[i] = 150;
               pixels[i+1] = 0;
               pixels[i+2] = 0;
            }
            else if (pixels[i] < 200 && pixels[i+1] < 200 && pixels[i+2] > 100) {
               pixels[i] = 255;
               pixels[i+1] = 0;
               pixels[i+2] = 0;
            } 
       }
       else {
         if (pixels[i] == 150 && pixels[i+1] == 0 && pixels[i+2] == 0) {
               pixels[i] = 0;
               pixels[i+1] = 0;
               pixels[i+2] = 255;
            }
           else if (pixels[i] == 255 && pixels[i+1] == 0 && pixels[i+2] == 0) {
               pixels[i] = 0;
               pixels[i+1] = 255;
               pixels[i+2] = 0;
           }
        } 
    }

    hatred = !hatred;
     updatePixels();

     

    if(munch > PI/3 || munch < 0)
         gogo_bite = !gogo_bite

      if(gogo_bite)
         munch += PI/3/12
      else
         munch -= PI/3/12
   
   drawSharkBoi(200, 350, 4, 0)

   
}

function Scene20() {
   fill(0)
   rect(0, 0, width, height)
   var i = 0;
   for(var y = 0; y < height; y += 20) {
      for(var x = 0; x < width; x += 20) {
         fill(255);

         ellipse(x + crazyX[i], y + crazyY[i], 2);
         i++;
      }
   }

   image(img1, 600, 400, 100, 100)
   image(img3, 100, 50, 100, 100)
   image(img4, 300, 600, 100, 100)

   drawShark(200, 350, 2, PI/4);
   earth_explosion.run();

   textScene20()
}

function beginGame()
{
   //setup
   background(0, 100, 255);
   noStroke();
   sharkR = sharkSize*radius;
   goldR = goldSize*radius;
   fishR = fishSize*radius;
   shrimpR = shrimpSize*radius;

   if(!gameStart)
   {
      textSize(50);
      text("Click Anywhere to Start", width/5, height/2);
   }

   textSize(18);
   text("Life: " + sharkLife, width-60,20);
   text("Size: " + sharkSize, width-80, height-20);

   //shark
   shark(sharkLoc.x,sharkLoc.y);

   //enemies
   for(var i=0; i<fishNum; i++)
   {   
      shrimpLoc[i].x += shrimpDir[i].x;  
      
      if(shrimpLoc[i].x > width)
      {
         shrimpLoc[i].x = 0;
      }

      shrimp(shrimpLoc[i].x, shrimpLoc[i].y);
      if(eatShrimp)
      {
         if(shrimpLoc[i].x)
         {

         }
      }
   }

   //Game conditions
   if(sharkSize > 5)
   {
      shrimpSize = 0.3;
      //aggressive fish appears
      for(var i=0; i<2; i++)
      {   
         fishLoc[i].x += fishDir[i].x;  
      
         if(fishLoc[i].x > width)
         {
            fishLoc[i].x = 0;
         }

         notShrimp(fishLoc.x,fishLoc.y);
      }
   }

   if(sharkSize > 8)
   {
      fishSize = 0.5;
      
      //goldfish appears
      goldFish(goldLoc.x,goldLoc.y);
   }

   if(sharkSize > 150)
   {
      maxSize = true;
   }

   if(maxSize && deadFish)
   {
      //end game
      okay = true
      scene++
      
   }
}

function imp_line (x, y, x0, y0, x1, y1) {
   return ( (y0 - y1) * x + (x1 - x0) * y + x0 * y1 - x1 * y0);
}

function mouseClicked() {
   console.log("X" + mouseX + "_" + "Y" + mouseY);
   console.log(scene);
   
      
      if( scene < 22 )
         scene++;
      else 
         scene = 1;
          

   frameRate(60);
   noStroke();
   munch = 0;
  

}

function isCollision(distance,r1,r2)
{
   if(distance-r1-r2 < 20)
   {
      return true;
   }
   else
   {
      return false;
   }
}


function Start()
{
   //setup
   background(0, 0, 255, 180);

   sharkR = sharkSize*radius;
   goldR = goldSize*radius;
   fishR = fishSize*radius;
   shrimpR = shrimpSize*radius;

   if(!gameStart)
   {
      textSize(50);
      text("Press any Key to Start", width/5, height/2);
   }

   textSize(18);
   text("Life: " + sharkLife, width-60,20);
   text("Size: " + sharkSize, width-80, height-20);

   //shark
   shark(sharkLoc.x,sharkLoc.y);

   //enemies
   for(var i=0; i<fishNum; i++)
   {   
      shrimpLoc[i].x += shrimpDir[i].x;  
      
      if(shrimpLoc[i].x > width)
      {
         shrimpLoc[i].x = 0;
         shrimpLoc[i].y = random(30,height-30)
      }

      shrimp(shrimpLoc[i].x, shrimpLoc[i].y);

      if(eatShrimp)
      {
         if(shrimpLoc[i].x<sharkLoc.x+10&&shrimpLoc[i].x>sharkLoc.x-10&&
         shrimpLoc[i].y<sharkLoc.y+10&&shrimpLoc[i].y>sharkLoc.y-10)
            shrimpLoc[i].x = 0;
            shrimpLoc[i].y = random(30,height-30);
      }
   }

   //Game conditions
   if(sharkSize > 5)
   {
      shrimpSize = 0.3;
      //aggressive fish appears
      for(var i=0; i<2; i++)
      {   
         fishLoc[i].x += fishDir[i].x;  
      
         if(fishLoc[i].x > width)
         {
            fishLoc[i].x = 0;
         }

         notShrimp(fishLoc.x,fishLoc.y);

         if(eatFish)
         {
            fishLoc[i].x = 0;
            fishLoc[i].y = random(30,height-30);
         }
      }
   }

   if(sharkSize > 8)
   {
      fishSize = 0.5;
      
      //goldfish appears
      goldFish(goldLoc.x,goldLoc.y);
   }

   if(sharkSize > 10)
   {
      maxSize = true;
   }

   if(maxSize && deadFish)
   {
      //end game
      textSize(18);
      text("You Win!" , width/4, height/2);
      scene = 17
   }
}


function shark(x,y)
{
   if(maxSize)
   {
      sharkSize = 10;
   } 
   else
   {
      if(eatShrimp)
      {
         sharkSize += shrimpSize;
         eatShrimp = false;
      }
      if(eatFish)
      {
         sharkSize += fishSize;
         eatFish = false;
      }
      if(enemyAttack)
      {
         sharkLife--;
         enemyAttack = false;
      }
      if(sharkLife == 0)
      {
         textSize(18);
         text("Game Over", width/4, height/2);
         sharkLife = 3;
         sharkSize = 1;
         shrimpSize = 0.1;
      }
   }

   push();
      translate(x,y);
      rotate(sharkRot);
      scale(sharkSize/6);

      fill(128)
      ellipse(0,0,80,40)
      push()
         translate(-5,-10)
         rotate(-PI/6)
         ellipse(0,0,80,35)
         triangle(-5,-15,10,-15,-5,-30)
         translate(50,5)
         rotate(-PI/36)
         ellipse(0,0,80,40)
         translate(0,20)
         ellipse(0,0,60,10)
      pop()
      translate(50,15)
      ellipse(-15,-10,20)
      push()
         rotate(PI/15)
         ellipse(0,0,55,10)
         triangle(-30,0,-12,0,-12,20)
      pop()
      translate(-50,-15)
      triangle(-10,35,0,0,30,0)
      triangle(-40,0,-40,20,-25,0)
      triangle(-35,0,-70,-20,-50,0)
      triangle(-50,0,-65,30,-30,0)

      push()
         fill(255)
         ellipse(20,-20,15)
         fill(0)
         ellipse(22,-20,10)
      pop()
   pop()
 
      if(sharkRot > PI/2 && sharkRot < 2*PI)
      {
         push();
            scale(1,-1);
         pop();
      }

   pop();
}

function shrimp(x,y)
{
   push();
      translate(x,y);
      scale(shrimpSize*2);

      fill(245,216,164)
        ellipse(0,0,60,40)
        push()
         fill(245,105,101)
         translate(0,-20)
         ellipse(0,0,80,40)
         rect(22,0,4,32)
         rect(14,0,4,34)
         rect(6,0,4,36)
         rect(-2,0,4,38)
         rect(-10,0,4,36)
         rect(-18,0,4,34)
         rect(-26,0,4,32)
         translate(-40,0)
         ellipse(0,0,30)
         rect(-2,0,4,38)
         rotate(-PI/18)
         translate(-20,0)
         ellipse(0,0,26)
         rect(-2,0,4,34)
         rotate(-PI/18)
         translate(-20,0)
         ellipse(0,0,22)
         rect(-2,0,4,30)
         rotate(-PI/18)
         translate(-20,0)
         ellipse(0,0,40,18)
        pop()
        push()
         translate(52,5)
         noFill()
         strokeWeight(3)
         stroke(245,216,164)
         arc(0,0,40,40,3*PI/2,5*PI/2)
        pop()  
        push()
         translate(40,-20)
         fill(245,105,101)
         ellipse(0,0,30)
         fill(255)
         ellipse(5,-5,10)
         fill(0)
         ellipse(7,-5,7)
        pop()

    pop()

   pop();

   if(isCollision(getDistance(x,y,sharkLoc.x,sharkLoc.y),sharkR,shrimpR))
   {
      if(sharkSize > shrimpSize)
      {
         eatShrimp = true;
      }
   }
}

function getDistance(x0,y0,x1,y1)
{
   return sqrt(pow(x0-x1,2) + pow(y0-y1,2));
}

function isCollision(distance,r1,r2)
{
   if(distance-r1-r2 < 20)
   {
      return true;
   }
   else
   {
      return false;
   }
}

function notShrimp(x,y) //change function name when the type of fish is confirmed
{
   push();
      translate(x,y);
      scale(fishSize*2);

      stroke(0);
      fill(255,0,0);
      ellipse(0,0,6);
   pop();

   if(isCollision(getDistance(x,y,sharkLoc.x,sharkLoc.y),sharkR,fishR))
   {
      if(sharkSize > fishSize)
      {
         eatFish = true;
      }
      else
      {
         sharkLife--;
      }
   }
}

function goldFish(x,y)
{
   goldDir.x = sharkLoc.x - goldLoc.x;
   goldDir.y = sharkLoc.y - goldLoc.y;

   goldLoc.x += goldDir.x/30;
   goldLoc.y += goldDir.y/30;

   goldRot = atan2(goldDir.y,goldDir.x);

   push();
      translate(x,y);
      rotate(goldRot);
      scale(goldSize/6);

       fill(255,168,0,50)
      triangle(5,20,-10,15,-10,28)
      triangle(-40,0,-40,10,-20,0)
   
      push()
         rotate(-PI/6)
         rect(-21,-21,40,25)
      pop()

      push()
         translate(-35,0)
         rotate(2*PI/3)
         ellipse(0,10,10,25)
      pop()

      push()
         translate(-35,0)
         rotate(-2*PI/3)
         ellipse(0,-10,10,25)
      pop()

      fill(255,128,0)
      ellipse(0,0,40)
      ellipse(0,0,60,40)
      ellipse(-20,0,40,16)
      ellipse(-15,0,30,20)
   
      fill(255)
      ellipse(10,-10,10)

      fill(0)
      ellipse(12,-10,6)
   pop()


      if(goldRot > PI/2 && goldRot < 2*PI)
      {
         push();
            scale(1,-1);
         pop();
      }
   pop();

   if(isCollision(getDistance(x,y,sharkLoc.x,sharkLoc.y),sharkR,goldR))
   {
      if(sharkSize > goldSize)
      {
         deadFish = true;
         goldFish(0,0);
      }
      else
      {
         sharkLife--;
      }
   }
}

function mouseMoved()
{
   if(gameStart)
   {
      sharkDir.x = mouseX - sharkLoc.x;
      sharkDir.y = mouseY - sharkLoc.y;

      sharkLoc.x += sharkDir.x/10;
      sharkLoc.y += sharkDir.y/10;

      sharkRot = atan2(sharkDir.y,sharkDir.x);
   }
}

function drawWhale(x,y,sc)
{
   noStroke()
      push()
      translate(x,y)
      fill(102,153,255)
      push()
         rotate(3*PI/4)
         ellipse(45,0,45,30)
      pop()
      ellipse(0,0,90)
      fill(255,255,204)
      arc(0,0,90,90,0,PI)
      fill(102,153,255)
      fill(255,255,204)
      arc(30,-15,90,90,-PI/6,PI/2)
      fill(102,153,255)
      arc(30,-15,75,75,-PI/6,PI/2)
      ellipse(0,0,90,45)
      fill(0,24,74)
      ellipse(0,-40,10,5)
      fill(255)
      ellipse(10,0,20)
      ellipse(-40,-5,20)
      fill(0)
      ellipse(8,0,15)
      ellipse(-42,-5,15)
      push()
         rotate(-PI/4)
         rect(2,-10,20,5)
         rect(-13,-43,5,20)
      pop()
      fill(102,153,255)
      push()
         rotate(PI/4)
         ellipse(50,0,45,30)
      pop()
      ellipse(80,-30,45,25)
      push()
         translate(60,-35)
         rotate(-PI/4)
         ellipse(0,0,25,45)
      pop()
    pop()
}

function keyPressed() {
   gameStart = true;
}

