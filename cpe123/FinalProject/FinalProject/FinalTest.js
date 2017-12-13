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

function setup()
{
   createCanvas(800,500);
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

function draw()
{
   //setup
   background(255);

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
      noLoop();
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

function mouseClicked()
{
   gameStart = true;
}