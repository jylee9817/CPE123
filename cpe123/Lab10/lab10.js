// Example of very simple particle systems - introduction to objects in javascript

// define a single particle
function Particle(x,y,r,g,b) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(-1, 1);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.locX = x;
   this.locY = y;
   this.r = 16.0;
   this.life = 100;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      if(this.life > 90)
      {
         this.velY -= this.accelY;
      }
      else
      {
         this.velY += this.accelY;  
      }
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();
         fill(color(r,g,b,255*this.life/100));
         translate(this.locX, this.locY);
         scale(this.life/90);
         triangle(0,0,this.r/2,this.r*sqrt(3)/2,this.r,0);
         
      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, num)
{
   // the data - lots of particles
   this.particles = [];
   ranColor = random(100,175);

   rColor = random(-80,80);
   gColor = random(-80,80);
   bColor = random(-80,80);
   
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, 
         ranColor+rColor,ranColor+gColor,ranColor+bColor));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

// declare of a variable to represent a particle system
var fireWork = [];

function setup() 
{
   createCanvas(500, 500);
   fireW1 = new PSys(200, 100, 100);
}

function draw() 
{
   background(0);
   for(var i = 0; i < fireWork.length; i++){
      fireWork[i].run();
   }
}

function mouseClicked()
{
   fireWork.push(new PSys(mouseX, mouseY, 50));
}