var fruitType = 0;

function setup() 
{
   createCanvas(600,400);
   background(random(50,200),255,121);
   returnFruitType();
}

function returnFruitType()
{
   fruitType =  Math.floor(random(3));
   if (fruitType == 3)
   {
      fruitType = 2;
   }
}

function drawApple(x,y)
{
   noStroke();
   fill(84,63,0);
   rect(x-3,y-30,5,12);

   fill(169,0,0);
   beginShape();
      curveVertex(x,y+25);
      curveVertex(x,y+25);
      curveVertex(x-10,y+27);
      curveVertex(x-23,y+15);
      curveVertex(x-28,y-5);
      curveVertex(x-22,y-20);
      curveVertex(x-10,y-22);
      curveVertex(x-5,y-20);
      curveVertex(x,y-18);
      curveVertex(x+5,y-20);
      curveVertex(x+10,y-22);
      curveVertex(x+22,y-20);
      curveVertex(x+28,y-5);
      curveVertex(x+23,y+15);
      curveVertex(x+10,y+27);
      curveVertex(x,y+25);
      curveVertex(x,y+25);
   endShape();

   //ellipse(x,y,50,50);

}

function drawLemon(x,y)
{
   noStroke();
   fill(212,169,0);
   ellipse(x,y,65,50);
   ellipse(x-32,y,10,10);
   ellipse(x+32,y,10,10);
}

function drawOrange(x,y)
{
   noStroke();
   fill(255,87,0);
   ellipse(x,y,50,50);
   fill(28,151,0);
   ellipse(x,y-25,7,7);
}

function chooseFruit(x,y)
{
   switch(fruitType)
   {
      case 0:
         drawOrange(x,y);
         break;
      case 1:
         drawApple(x,y);
         break;
      case 2:
         drawLemon(x,y);
         break;
   }
}

function drawFruit()
{
   for(var i = 0; i < 6; i++)
   {
      chooseFruit(i*100+50,100);
   }

   for(var i = 0; i < 6; i++)
   {
      chooseFruit(50+i*100,200);
   }

   for(var i = 0; i < 6; i++)
   {
      chooseFruit(50+i*100,300);
   }
}

function draw() 
{
   drawFruit();
}