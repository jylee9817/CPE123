var img1, img2, img3, img4;
var imgDis1, imgDis2, imgDis3, imgDis4;

function getImpCircle(x,y,cx,cy,r)
{
   return pow((x-cx),2) + pow((y-cy),2) - pow(r,2);
}

function getImpEllipse(x,y,ex,ey,ew,eh) //ew-ellipse width, eh-ellipse height
{
   return pow((x-ex),2)/pow(ew,2) + pow((y-ey),2)/pow(eh,2) - 1;
}

function getImpLine(x,y,x0,y0,x1,y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function preload()
{
   img1 = loadImage("portrait.jpg");
   img2 = loadImage("portrait.jpg");
   img3 = loadImage("portrait.jpg");
   img4 = loadImage("portrait.jpg");
}

function topLeft()
{
   for(y=0;y<img1.height;y++)
   {
      for(x=0;x<img1.width;x++)
      {
         if(getImpEllipse(x,y,img1.width/2-10,img1.height/2-25,55,60) < 0)
         {
           if (brightness(img1.get(x,y)) > 70)
            {
               imgDis1.set(x,y,100);
            }
            else if (brightness(img1.get(x,y)) > 60)
            {
               imgDis1.set(x,y,50);
            }
            else if (brightness(img1.get(x,y)) > 50)
            {
               imgDis1.set(x,y,25);
            }
            else
            {
               imgDis1.set(x,y,[255,0,100,255]);   
            }
         }
         else if((getImpEllipse(x,y,img1.width/2-5,img1.height/2+40,20,10) < 0))
         {
            if (brightness(img1.get(x,y)) > 70)
            {
               imgDis1.set(x,y,[255,150,0,255]);
            }
            else if (brightness(img1.get(x,y)) > 60)
            {
               imgDis1.set(x,y,[255,50,0,255]);
            }
            else if (brightness(img1.get(x,y)) > 50)
            {
               imgDis1.set(x,y,[255,25,0,255]);
            }
            else
            {
               imgDis1.set(x,y,0);   
            }   
         }
         else if(getImpEllipse(x,y,img1.width/2-15,img1.height/2-10,55,75) < 0)
         {
            if (brightness(img1.get(x,y)) > 70)
            {
               imgDis1.set(x,y,100);
            }
            else if (brightness(img1.get(x,y)) > 60)
            {
               imgDis1.set(x,y,50);
            }
            else if (brightness(img1.get(x,y)) > 50)
            {
               imgDis1.set(x,y,25);
            }
            else
            {
               imgDis1.set(x,y,0);   
            }
         }
         else if((getImpLine(x,y,0,165,width/2,165) > 0) && 
         ((getImpLine(x,y,0,200,width/2,200) < 0))) 
         {
            if (brightness(img1.get(x,y)) > 70)
            {
               imgDis1.set(x,y,[0,100,0,255]);
            }
            else if (brightness(img1.get(x,y)) > 60)
            {
               imgDis1.set(x,y,[0,50,0,255]);
            }
            else if (brightness(img1.get(x,y)) > 50)
            {
               imgDis1.set(x,y,[0,25,0,255]);
            }
            else
            {
               imgDis1.set(x,y,0);   
            }
         }
         else
         {
            if(brightness(img1.get(x,y)) > 60)
            {
               imgDis1.set(x,y,[255,0,0,255]);
            }
            else
            {
               imgDis1.set(x,y,50)
            }
         }
      }
   }
}

function bottomLeft()
{
   for(y=0;y<img2.height;y++)
   {
      for(x=0;x<img2.width;x++)
      {
         if(getImpEllipse(x,y,img2.width/2-10,img2.height/2-25,55,60) < 0)
         {
           if (brightness(img2.get(x,y)) > 70)
            {
               imgDis2.set(x,y,100);
            }
            else if (brightness(img2.get(x,y)) > 60)
            {
               imgDis2.set(x,y,50);
            }
            else if (brightness(img2.get(x,y)) > 50)
            {
               imgDis2.set(x,y,25);
            }
            else
            {
               imgDis2.set(x,y,[100,0,255,255]);   
            }
         }
         else if((getImpEllipse(x,y,img2.width/2-5,img2.height/2+40,20,10) < 0))
         {
            if (brightness(img2.get(x,y)) > 70)
            {
               imgDis2.set(x,y,[255,150,0,255]);
            }
            else if (brightness(img2.get(x,y)) > 60)
            {
               imgDis2.set(x,y,[255,50,0,255]);
            }
            else if (brightness(img2.get(x,y)) > 50)
            {
               imgDis2.set(x,y,[255,25,0,255]);
            }
            else
            {
               imgDis2.set(x,y,0);   
            }   
         }
         else if(getImpEllipse(x,y,img2.width/2-15,img2.height/2-10,55,75) < 0)
         {
            if (brightness(img2.get(x,y)) > 70)
            {
               imgDis2.set(x,y,100);
            }
            else if (brightness(img2.get(x,y)) > 60)
            {
               imgDis2.set(x,y,50);
            }
            else if (brightness(img2.get(x,y)) > 50)
            {
               imgDis2.set(x,y,25);
            }
            else
            {
               imgDis2.set(x,y,0);   
            }
         }
         else if((getImpLine(x,y,0,165,width/2,165) > 0) && 
         ((getImpLine(x,y,0,200,width/2,200) < 0))) 
         {
            if (brightness(img2.get(x,y)) > 70)
            {
               imgDis2.set(x,y,[0,100,0,255]);
            }
            else if (brightness(img2.get(x,y)) > 60)
            {
               imgDis2.set(x,y,[0,50,0,255]);
            }
            else if (brightness(img2.get(x,y)) > 50)
            {
               imgDis2.set(x,y,[0,25,0,255]);
            }
            else
            {
               imgDis2.set(x,y,0);   
            }
         }
         else
         {
            if(brightness(img2.get(x,y)) > 60)
            {
               imgDis2.set(x,y,[0,255,255,255]);
            }
            else
            {
               imgDis2.set(x,y,50)
            }
         }
      }
   }
}

function topRight()
{
   for(y=0;y<img3.height;y++)
   {
      for(x=0;x<img3.width;x++)
      {
         if(getImpEllipse(x,y,img3.width/2-10,img3.height/2-25,55,60) < 0)
         {
           if (brightness(img3.get(x,y)) > 70)
            {
               imgDis3.set(x,y,100);
            }
            else if (brightness(img3.get(x,y)) > 60)
            {
               imgDis3.set(x,y,50);
            }
            else if (brightness(img3.get(x,y)) > 50)
            {
               imgDis3.set(x,y,25);
            }
            else
            {
               imgDis3.set(x,y,[0,255,100,255]);   
            }
         }
         else if((getImpEllipse(x,y,img3.width/2-5,img3.height/2+40,20,10) < 0))
         {
            if (brightness(img3.get(x,y)) > 70)
            {
               imgDis3.set(x,y,[255,150,0,255]);
            }
            else if (brightness(img3.get(x,y)) > 60)
            {
               imgDis3.set(x,y,[255,50,0,255]);
            }
            else if (brightness(img3.get(x,y)) > 50)
            {
               imgDis3.set(x,y,[255,25,0,255]);
            }
            else
            {
               imgDis3.set(x,y,0);   
            }   
         }
         else if(getImpEllipse(x,y,img3.width/2-15,img3.height/2-10,55,75) < 0)
         {
            if (brightness(img3.get(x,y)) > 70)
            {
               imgDis3.set(x,y,100);
            }
            else if (brightness(img3.get(x,y)) > 60)
            {
               imgDis3.set(x,y,50);
            }
            else if (brightness(img3.get(x,y)) > 50)
            {
               imgDis3.set(x,y,25);
            }
            else
            {
               imgDis3.set(x,y,0);   
            }
         }
         else if((getImpLine(x,y,0,165,width/2,165) > 0) && 
         ((getImpLine(x,y,0,200,width/2,200) < 0))) 
         {
            if (brightness(img3.get(x,y)) > 70)
            {
               imgDis3.set(x,y,[0,100,0,255]);
            }
            else if (brightness(img3.get(x,y)) > 60)
            {
               imgDis3.set(x,y,[0,50,0,255]);
            }
            else if (brightness(img3.get(x,y)) > 50)
            {
               imgDis3.set(x,y,[0,25,0,255]);
            }
            else
            {
               imgDis3.set(x,y,0);   
            }
         }
         else
         {
            if(brightness(img3.get(x,y)) > 60)
            {
               imgDis3.set(x,y,[255,255,0,255]);
            }
            else
            {
               imgDis3.set(x,y,50)
            }
         }
      }
   }
}

function bottomRight()
{
   for(y=0;y<img3.height;y++)
   {
      for(x=0;x<img3.width;x++)
      {
         if(getImpEllipse(x,y,img4.width/2-10,img4.height/2-25,55,60) < 0)
         {
           if (brightness(img4.get(x,y)) > 70)
            {
               imgDis4.set(x,y,100);
            }
            else if (brightness(img4.get(x,y)) > 60)
            {
               imgDis4.set(x,y,50);
            }
            else if (brightness(img4.get(x,y)) > 50)
            {
               imgDis4.set(x,y,25);
            }
            else
            {
               imgDis4.set(x,y,[0,100,255,255]);   
            }
         }
         else if((getImpEllipse(x,y,img4.width/2-5,img4.height/2+40,20,10) < 0))
         {
            if (brightness(img4.get(x,y)) > 70)
            {
               imgDis4.set(x,y,[255,150,0,255]);
            }
            else if (brightness(img4.get(x,y)) > 60)
            {
               imgDis4.set(x,y,[255,50,0,255]);
            }
            else if (brightness(img4.get(x,y)) > 50)
            {
               imgDis4.set(x,y,[255,25,0,255]);
            }
            else
            {
               imgDis4.set(x,y,0);   
            }   
         }
         else if(getImpEllipse(x,y,img4.width/2-15,img4.height/2-10,55,75) < 0)
         {
            if (brightness(img4.get(x,y)) > 70)
            {
               imgDis4.set(x,y,100);
            }
            else if (brightness(img4.get(x,y)) > 60)
            {
               imgDis4.set(x,y,50);
            }
            else if (brightness(img4.get(x,y)) > 50)
            {
               imgDis4.set(x,y,25);
            }
            else
            {
               imgDis4.set(x,y,0);   
            }
         }
         else if((getImpLine(x,y,0,165,width/2,165) > 0) && 
         ((getImpLine(x,y,0,200,width/2,200) < 0))) 
         {
            if (brightness(img4.get(x,y)) > 70)
            {
               imgDis4.set(x,y,[0,100,0,255]);
            }
            else if (brightness(img4.get(x,y)) > 60)
            {
               imgDis4.set(x,y,[0,50,0,255]);
            }
            else if (brightness(img4.get(x,y)) > 50)
            {
               imgDis4.set(x,y,[0,25,0,255]);
            }
            else
            {
               imgDis4.set(x,y,0);   
            }
         }
         else
         {
            if(brightness(img4.get(x,y)) > 60)
            {
               imgDis4.set(x,y,[0,255,0,255]);
            }
            else
            {
               imgDis4.set(x,y,50)
            }
         }
      }
   }
}

function setup()
{     
   createCanvas(300,400);

   imgDis1 = createImage(img1.width,img1.height,RGB);
   imgDis2 = createImage(img2.width,img2.height,RGB);
   imgDis3 = createImage(img3.width,img3.height,RGB);
   imgDis4 = createImage(img4.width,img4.height,RGB);

   image(img1,0,0);
   image(img2,0,200);
   image(img3,150,0);
   image(img4,150,200);

   imgDis1.loadPixels();
   imgDis2.loadPixels();
   imgDis3.loadPixels();
   imgDis4.loadPixels();

   topLeft();
   bottomLeft();
   topRight();
   bottomRight();

   imgDis1.updatePixels();
   imgDis2.updatePixels();
   imgDis3.updatePixels();
   imgDis4.updatePixels();

   image(imgDis1,0,0);
   image(imgDis2,0,200);
   image(imgDis3,150,0);
   image(imgDis4,150,200);
}
