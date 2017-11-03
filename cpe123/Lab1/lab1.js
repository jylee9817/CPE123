//variable declaration
var pupilSize = 0;
var currentPupil = 0;
var isMax = false;

var x = 0;
var y = 800;
var radius = 0;

function setup() 
{
   createCanvas(800, 700);
   currentPupil = 0;
}

function movePupil(expectedPupil)
{
	if(currentPupil == expectedPupil)
	{
		isMax = true;
	}
	else
	{
		isMax = false;
	}

	if(isMax == false && (currentPupil < (expectedPupil+1)))
	{
		pupilSize =+ 0.2;
	}
	else if((currentPupil > 0) && isMax)
	{
		pupilSize =- 0.2;
	}

   return pupilSize;
}

function bubble()
{
	radius = Math.floor(Math.random() * 11);
	x = Math.floor(Math.random() * 801);

	fill(148,241,255);
	ellipse(x, y-10, radius,radius);
	if(y == 0)
	{
		y = 700;
	}
}

function draw() 
{
   //setup
   background(255, 255, 150);
   bubble();
   smooth();
   noStroke();

   //bubbles
   fill(0,241,255);
   ellipse(10, 430, 25,25);
   ellipse(360, 630, 31,31);
   ellipse(610, 490, 20,20);
   ellipse(260, 330, 28,28);
   ellipse(760, 100, 20,20);
   ellipse(100, 210, 50,50);
   ellipse(540, 200, 80,80);
   ellipse(200, 530, 60,60);

   //Back fin of Murky
   fill(84,255,224);
   quad(180, 285, 165, 360, 230, 370, 250, 330);
   quad(165, 360, 175, 435, 235, 415, 230, 350);

   quad(620, 285, 635, 360, 570, 370, 550, 330);
   quad(635, 360, 625, 435, 565, 415, 570, 350);

   //hair of Murky
   fill(255, 152, 3);//same color as stroke
   stroke(255, 152, 3);
   strokeWeight(5);
   strokeJoin(ROUND);
   triangle(400, 310, 380, 120, 420, 130);
   triangle(380, 120, 420, 130, 385, 90);
   arc(388,124,70,70,6*PI/4,PI/2);

   //Head of Murky
   fill(0, 120, 0);
   ellipse(400, 400, 300, 250);

   //Fin of Murky
   fill(255, 152, 3);//same color as stroke
   triangle(330, 380, 320, 390, 130, 250);
   triangle(330, 380, 320, 390, 130, 350);
   triangle(330, 380, 320, 390, 130, 450);

   triangle(470, 380, 480, 390, 670, 250);
   triangle(470, 380, 480, 390, 670, 350);
   triangle(470, 380, 480, 390, 670, 450);

   //Eye of Murky
   fill(225,215,80);
   arc(350, 400, 250, 250, 3*PI/4, 3*PI/2);
   arc(450, 400, 250, 250, 3*PI/2, PI/4);

   //Pupil of Murky
   noStroke();

   //Blue Pupil
   fill(121,225,149);

   arc(300,365,35,130,PI/2,3*PI/2);
   arc(300,365,35,130,3*PI/2,PI/2);

   arc(500,365,35,130,PI/2,3*PI/2);
   arc(500,365,35,130,3*PI/2,PI/2);

   //Black Pupil
   fill(0);
   arc(300,365,15,130,PI/2,3*PI/2);
   arc(300,365,15,130,3*PI/2,PI/2);

   arc(500,365,15,130,PI/2,3*PI/2);
   arc(500,365,15,130,3*PI/2,PI/2);

   //Teeth of Murky
   fill(255);
   stroke(255);
   strokeWeight(5);
   strokeJoin(ROUND);
   quad(350,453,350,485,395,480,395,460);
   quad(450,453,450,485,405,480,405,460);

   //Mouth of Murky
   fill(125, 79, 0);//same color as stroke
   stroke(125, 79, 0);
   strokeWeight(5);
   strokeJoin(ROUND);
   triangle(295,470,380,440,400,460);
   triangle(505,470,420,440,395,460);

   //changing shade
   fill(84,82,82,60)
   rect(0,0,900,900);

}