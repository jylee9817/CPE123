// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, time, LegR, footR, beakR, beak2R;

var LegUp = true;
var neckDown = true;
var wingDown = false;
var animate = false;
var footdown = false;
var beakOpen = true;

// normal set up
function setup() 
{
   createCanvas(200, 200);

   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   LegR = 0
   Leg2R = 0
   beakR = -18
   beak2R = -18
}

// normal draw
function draw() 
{
   background(15,41,41);

   noStroke();

   for(y=0;y<height/2;y++)
   {
      for(x=0;x<width;x++)
      {
         if(getImpLine(x,y,0,200,200,200) < 0)
         {
            d = getDistance(width/2,0,width/2,y);
            fill(125,125,125,d/3);
            ellipse(x,y,2);
         }
      }
   }

   fill(255,255,0,200);
   ellipse(3*width/4, height/4, 80);

   //foreground
   fill(0,59,7);
   rect(0, height/2, width, height/2);

   grass(150,100,1);
   grass(120,180,1.5);
   grass(80,120,1.1);
   grass(60,150,1.3);

   drawDuck();
   if (animate) 
   {
      moveDuck();
   }
}

function getDistance(x0,y0,x1,y1)
{
   return sqrt(pow(x0-x1,2) + pow(y0-y1,2));
}

function getImpLine(x,y,x0,y0,x1,y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(1.2); //scale the entire duck

      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 
      fill(50);
      push();
         translate(0, 10); 
         rotate(LegR); 
         ellipse(5, 10, 5,20);
         ellipse(2, 20, 10, 2);
      pop();

      push();
         translate(0, 10);
         rotate(Leg2R); 
         ellipse(-3, 10, 5,20);
         ellipse(-5, 20, 10, 2);
      pop();

      // draw body
      fill(0);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(255);
         ellipse(0, -19, 4, 4);  //eye
         fill(50);
         triangle(-10, beakR, -4, -18, -4, -15);
         triangle(-10, beak2R, -4, -21, -4, -18); //beak
      pop();

      //draw wing with possible animation transforms
      fill(10);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

   pop();
   console.log(beakR)
}

function grass(x, y, sc)
{
   push()
      translate(x, y);
      scale(sc);
      fill(0,35,7);
      triangle(-2, 0, 0, -20, 2, 0);
      triangle(-2, 0, -4, -15, -6, 0);
      triangle(2, 0, 4, -15, 6, 0);
   pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -2*PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= PI/100;
   } 
   else 
   {
      neckR += PI/100;
   }

   if(beakOpen)
   {
      beakR += .5;
      beak2R -= .5;
   }
   else
   {
      beakR -= .5;
      beak2R += .5;  
   }

   if(beakR > -10 || beakR < -18)
   {
      beakOpen = !beakOpen
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/100;
   } 
   else 
   {
      wingR += PI/100;
   }

   if(LegUp)
   {
      LegR -= PI/50
      Leg2R += PI/50
   }
   else
   {
      LegR += PI/50
      Leg2R -= PI/50
   }

   if(LegR > PI/3 || LegR < -PI/4)
   {
      LegUp = !LegUp
   }
}