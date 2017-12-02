var flag1, flag2, flag3; //if true, the animation/alternation is activated
var maxY = 0;
var alpha = 255;
var audio = new Audio('audio.mp3');

function getImpLine(x,y,x0,y0,x1,y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function drawCurve(xCor,yCor)
{
   for(var i = 0; i < 14*PI/3; i += PI/30)
   {
      x = xCor + (-1.5*Math.pow(Math.E,i*0.15))*cos(i);
      y = yCor + (-1.5*Math.pow(Math.E,i*0.15))*sin(i);

      fill(255);
      ellipse(x,y,i/3);
   }
}

function preload()
{
   main = loadImage("bigShaq.jpg");
   shutter = loadImage("shutter.jpg");
}

function mainColor()
{
   for(x=0;x<300;x++)
   {
      for(y=0;y<200;y++)
      {
         if((getImpLine(x,y,0,0,0,200) < 0) &&
            (getImpLine(x,y,100,0,100,200) > 0))
         {
            if (brightness(main.get(x,y)) > 75)
            {
               mainDis.set(x,y,[100,0,0,255]);
            }
         }

         if((getImpLine(x,y,100,0,100,200) < 0) &&
            (getImpLine(x,y,200,0,200,200) > 0))
         {
            if (brightness(main.get(x,y)) > 75)
            {
               mainDis.set(x,y,[0,100,0,255]);
            }
         }

         if((getImpLine(x,y,200,0,200,200) < 0)&&
            (getImpLine(x,y,300,0,300,200) > 0))
         {
            if (brightness(main.get(x,y)) > 75)
            {
               mainDis.set(x,y,[0,0,100,255]);
            }
         }
      }
   }
}

function shutterUp()
{
   if(flag1)
   {
      for(var i = 0; i < maxY; i += 10)
      {
        image(main,0,0);
        image(mainDis,0,0);
        image(shutter,0,maxY);
      }

      maxY += 10;

      if(maxY > 200)
        noLoop();
        audio.play();
    }
}

function secondSection()
{
   if(flag2)
   {
      secondDis.loadPixels();
      
      for(y=0;y<200;y++)
      {
         for(x=100;x<200;x++)
         {
            if (brightness(main.get(x,y)) > 70)
            {
               secondDis.set(x,y,[0,100,0,255]);
            }
            else if (brightness(main.get(x,y)) > 60)
            {
               secondDis.set(x,y,50);
            }
            else if (brightness(main.get(x,y)) > 50)
            {
               secondDis.set(x,y,25);
            }
            else
            {
               secondDis.set(x,y,0);   
            }
         }
      }

      for(y=0;y<200;y+=5)
      {
         for(x=100;x<200;x+=5)
         {
            secondDis.set(x,y,[0,0,0,100]);
         }
      }

      secondDis.updatePixels();
      image(secondDis,0,0);
   }
}

function sectionThree()
{
   if(flag3)
   {
      for(i=0;i<10;i++)
      {
         drawCurve(random(200,300),random(0,200));
      }
   }
}

function setup()
{
   createCanvas(300,200);
   background(0);
   noStroke();

   flag1 = false;
   flag2 = false;
   flag3 = false;

   mainDis = createImage(main.width,main.height,RGB);
   secondDis = createImage(main.width,main.height,RGB);
   
   mainDis.loadPixels();
   mainColor();
   mainDis.updatePixels();

   image(main,0,0);
   image(mainDis,0,0);
   image(shutter,0,0);
}

function draw()
{
   shutterUp();
   secondSection();
   sectionThree();   
}

function mouseClicked()
{
   if(mouseY>0 && mouseY<200)
   {
      if(mouseX>0 && mouseX<100)
      {
         flag1=true;
      }
      if(mouseX>100 && mouseX<200)
      {
         flag2=true;
      }
      if(mouseX>200 && mouseX<300)
      {
         flag3=true;
      }
   }
}