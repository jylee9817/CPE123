function setup() 
{
	createCanvas(600,400);
	noStroke();
	noLoop();
}

function getImpLine(x,y,x0,y0,x1,y1)
{
	return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function getImpCircle(x,y,cx,cy,r)
{
	return pow((x-cx),2) + pow((y-cy),2) - pow(r,2);
}

function getImpEllipse(x,y,ex,ey,ew,eh) //ew-ellipse width, eh-ellipse height
{
	return pow((x-ex),2)/pow(ew,2) + pow((y-ey),2)/pow(eh,2) - 1;
}

function getDistance(x0,y0,x1,y1)
{
	return sqrt(pow(x0-x1,2) + pow(y0-y1,2));
}

function drawBackground()
{
	for(y = 0; y < height; y+=4)
	{
		for(x = 0; x < width; x+=4)
		{
			d = getDistance(x,height,x,y);

			if(getImpLine(x,y,0,100,width,100) < 0)
			{
				fill(53,random(133,255)-d/4,193);
			}
			else
			{
				fill(0,10,random(150,200)+d/3);
			}
			ellipse(x+random(-2,2),y+random(-2,2),10);
		}
	}
}

function drawFish()
{
	for(y = 0; y < height; y+=4)
	{
		for(x = 0; x < width; x+=4)
		{
			if(getImpCircle(x,y,width/2,height/2+30,100) < 0)
			{
				fill(53,random(133,255),193);
				triangle(x-5/sqrt(5),y-5/sqrt(5),x,y+5,x+5/sqrt(5),y-5/sqrt(5));
			}
		}
	}
}

function drawFishEye(xPos,yPos)
{
	for(y = 0; y < height; y+=4)
	{
		for(x = 0; x < width; x+=4)
		{
			if(getImpCircle(x,y,width/2-xPos,height/2+yPos,40) < 0)
			{
				d = getDistance(250,180,x,y);

				fill(random(200,255)-d/2);
				triangle(x-5/sqrt(5),y-5/sqrt(5),x,y+5,x+5/sqrt(5),y-5/sqrt(5));
			}
		}
	}	
}

function drawFishPupil()
{
	for(y = 0; y < height; y+=4)
	{
		for(x = 0; x < width; x+=4)
		{
			if(getImpEllipse(x,y,width/2-30,height/2+10,15,30) < 0)
			{
				d = getDistance(250,180,x,y);

				fill(random(50,100)-d/2);
				triangle(x-5/sqrt(5),y-5/sqrt(5),x,y+5,x+5/sqrt(5),y-5/sqrt(5));
			}
		}
	}

	//fill(0);
	//ellipse(270,200,20,35);
	fill(210);
	ellipse(275,225,5);
}

function drawFin()
{
	fill(255,255,255,100);
	
	triangle(280,140,380,60,370,160);
	triangle(280,320,380,390,370,300);

	push();
		translate(0,10);
		triangle(390,225,500,140,490,190);
		triangle(390,225,500,290,490,245);
	pop();
}

function draw() 
{
	drawBackground();
	drawFin();
	drawFishEye(70,10);
	drawFish();
	drawFishEye(25,10);
	drawFishPupil();
}	