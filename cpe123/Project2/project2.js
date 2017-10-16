var isPressed;
var flowerScale;
var flowerX;
var flowerY;
var flowerColor;

function setup() 
{
   createCanvas(800, 400);
   
   isPressed = false;

   flowerScale = 0.2;   
   flowerX=400;
   flowerY=135;
   flowerColor=true;
}

function drawFlower()
{
   //flower stem
   push();
      translate(flowerX,flowerY);

      scale(flowerScale); 
      if(flowerColor)
         fill(4,135,0);
      else
         fill(0);
      noStroke();
      rect(-10,0,20,300);
   pop();

   //pallet of the flower
   if(flowerColor)
      fill(255,187,0);
   else
      fill(0);
   push();
      translate(flowerX,flowerY);
      scale(flowerScale);
      ellipse(0,0,40,40);

      for(var i = 0; i < 9*PI/4; i++)
      {
         rotate(i*PI/4);
         beginShape();
            curveVertex(40,0);
            curveVertex(40,0);
            curveVertex(120,-20);
            curveVertex(160,0);
            curveVertex(120,20)
            curveVertex(40,0);
            curveVertex(40,0);
         endShape();
      }

      rotate(PI/8);

      for(var i = 0; i < 9*PI/4; i++)
      {
         rotate(i*PI/4);
         beginShape();
            curveVertex(40,0);
            curveVertex(40,0);
            curveVertex(120,-20);
            curveVertex(160,0);
            curveVertex(120,20)
            curveVertex(40,0);
            curveVertex(40,0);
         endShape();
      }
   pop();

   //the head of the flower
   push();
      noStroke();
      translate(flowerX,flowerY);
      scale(flowerScale);   
      if(flowerColor)
         fill(92,51,0);
      else
         fill(0);
      ellipse(0,0,150);
   pop();

   //leaves of the flower
   push();   
      translate(flowerX,flowerY+40);   
      if(flowerColor)   
         fill(4,135,0);
      else
         fill(0);

      scale(flowerScale);
      beginShape();
         vertex(0,0);
         bezierVertex(40,0,40,-75,160,0);
         bezierVertex(50,80,60,25,0,0);
      endShape();

      scale(-1,1);
      beginShape();
         vertex(0,0);
         bezierVertex(40,0,40,-75,160,0);
         bezierVertex(50,80,60,25,0,0);
      endShape();
   pop();
}

function drawEye()
{
   //the pupil of the eye - bezierVertex
   push();
      translate(flowerX,flowerY);
      scale(flowerScale);

      noStroke();
      fill(200,35,29,100);

      if(isPressed)
      {
         for(var i=0;i<100;i++)
         {
            beginShape();
               vertex(0,-70);
               bezierVertex(-0.2*i,-0.6*i,-0.2*i,0.6*i,0,70);
               bezierVertex(0.2*i,0.6*i,0.2*i,-0.6*i,0,-70);
            endShape();
         }
         fill(0);
         ellipse(0,0,30,30);
      }
      else
      {
         fill(92,51,0);
         ellipse(0,0,150);
         for(var i=100;i>1;i--)
         {
            beginShape();
               vertex(0,-70);
               bezierVertex(-0.2*i,-0.6*i,-0.2*i,0.6*i,0,70);
               bezierVertex(0.2*i,0.6*i,0.2*i,-0.6*i,0,-70);
            endShape();
         }
      }

   pop();
}

function draw() 
{
   tentacle();
   background(102, 83, 58);
   
   //background   
   fill(74,60,42)
   noStroke()
   ellipse(100,200,400,200)
   ellipse(300,225,400,200)
   ellipse(500,240,400,200)
   ellipse(700,225,400,200)

   fill(255,180,58,200)
   ellipse(400,400,1000,400)
   fill(255,207,58,100)
   ellipse(400,425,1000,400)
   fill(255,227,162,100)
   ellipse(400,450,1000,400)

   //hill
   fill(0)
   push()
      translate(400,350)
      rotate(-PI/6)
      ellipse(0,0,500,250)
   pop()
   ellipse(575,500,250,500)
   triangle(150,400,325,400,325,240)

   drawFlower();

   //manor
   fill(0)
   rect(315,190,50,70)
   rect(365,190,70,10)
   rect(385,190,10,50)
   rect(415,190,10,30)
   rect(425,180,10,40)
   rect(435,130,40,70)
   quad(435,130,475,130,475,125,430,125)
   rect(428,123,47,4)
   rect(431,108,44,15)
   rect(428,104,47,4)
   quad(425,104,435,98,475,98,475,104)
   quad(475,200,475,98,485,104,485,190)
   rect(485,74,30,120)
   quad(485,74,488,71,488,41,497,74)
   rect(515,64,20,130)
   rect(481,74,58,4)
   rect(515,64,27,8)
   quad(488,74,488,64,515,57,515,74)
   quad(505,53,535,53,532,68,505,68)
   rect(512,33,23,20)
   quad(512,33,535,33,535,28,515,28)
   rect(518,10,17,23)
   triangle(518,10,535,10,527,8)
   quad(535,78,540,82,540,190,535,190)
   rect(540,89,5,101)
   rect(545,82,10,108)
   rect(545,82,45,7)
   rect(580,82,10,108)
   rect(545,130,45,80)
   arc(567,82,45,55,PI,0)
   rect(565,82,4,80)
   rect(310,165,7,35)
   rect(310,165,25,7)
   quad(314,165,310,170,303,161,310,161)
   rect(303,159,15,3)
   rect(314,152,12,10)
   rect(315,157,13,10)
   rect(335,167,8,4)
   rect(314,150,17,4)
   rect(319,130,4,30)
   rect(325,185,30,5)
   rect(355,165,4,25)
   rect(350,172,14,3)
   rect(364,185,5,5)
   rect(372,185,5,5)
   rect(380,185,5,5)
   rect(388,185,5,5)
   rect(396,185,5,5)
   rect(404,185,5,5)
   rect(412,185,5,5)
   rect(420,185,5,5)

   //tree
   beginShape()
   vertex(0,0)
   vertex(100,0)
   vertex(75,50)
   vertex(90,40)
   vertex(94,38)
   vertex(110,0)
   vertex(115,0)
   vertex(110,15)
   vertex(125,0)
   vertex(130,0)
   vertex(110,20)
   vertex(100,38)
   vertex(145,0)
   vertex(185,0)
   vertex(130,38)
   vertex(75,90)
   vertex(70,92)
   vertex(68,110)
   vertex(71,107)
   vertex(65,125)
   vertex(70,125)
   vertex(65,130)
   vertex(65,150)
   vertex(85,140)
   vertex(115,120)
   vertex(150,80)
   vertex(165,80)
   vertex(195,50)
   vertex(215,25)
   vertex(223,22)
   vertex(260,0)
   vertex(280,0)
   vertex(267,20)
   vertex(327,0)
   vertex(347,0)
   vertex(263,40)
   vertex(225,45)
   vertex(210,65)
   vertex(207,65)
   vertex(197,75)
   vertex(177,100)
   vertex(152,125)
   vertex(122,150)
   vertex(65,200)
   vertex(55,230)
   vertex(55,237)
   vertex(64,237)
   vertex(52,247)
   vertex(47,278)
   vertex(107,266)
   vertex(109,251)
   vertex(117,237)
   vertex(120,235)
   vertex(123,237)
   vertex(117,268)
   vertex(132,248)
   vertex(192,228)
   vertex(133,258)
   vertex(117,278)
   vertex(80,290)
   vertex(40,310)
   vertex(20,400)
   vertex(0,400)
   endShape()

   if (isPressed) 
   {
      frameRate(5)
      tentacle()
   }
}   



function tentacle()
{
   background(101,14,11)

   fill(75,14,11)
   noStroke()
   ellipse(100,200,400,200)
   ellipse(300,225,400,200)
   ellipse(500,240,400,200)
   ellipse(700,225,400,200)

   fill(133,35,29,200)
   ellipse(400,400,1000,400)
   fill(169,35,29,100)
   ellipse(400,425,1000,400)
   fill(200,35,29,100)
   ellipse(400,450,1000,400)

   //hill
   fill(0)
   push()
      translate(400,350)
      rotate(-PI/6)
      ellipse(0,0,500,250)
   pop()
   ellipse(575,500,250,500)
   triangle(150,400,325,400,325,240)

   drawFlower();
   drawEye();

   //manor
   fill(0)
   rect(315,190,50,70)
   rect(365,190,70,10)
   rect(385,190,10,50)
   rect(415,190,10,30)
   rect(425,180,10,40)
   rect(435,130,40,70)
   quad(435,130,475,130,475,125,430,125)
   rect(428,123,47,4)
   rect(431,108,44,15)
   rect(428,104,47,4)
   quad(425,104,435,98,475,98,475,104)
   quad(475,200,475,98,485,104,485,190)
   rect(485,74,30,120)
   quad(485,74,488,71,488,41,497,74)
   rect(515,64,20,130)
   rect(481,74,58,4)
   rect(515,64,27,8)
   quad(488,74,488,64,515,57,515,74)
   //rect(505,53,30,15)
   quad(505,53,535,53,532,68,505,68)
   rect(512,33,23,20)
   quad(512,33,535,33,535,28,515,28)
   rect(518,10,17,23)
   triangle(518,10,535,10,527,8)
   quad(535,78,540,82,540,190,535,190)
   rect(540,89,5,101)
   rect(545,82,10,108)
   rect(545,82,45,7)
   rect(580,82,10,108)
   rect(545,130,45,80)
   arc(567,82,45,55,PI,0)
   rect(565,82,4,80)
   rect(310,165,7,35)
   rect(310,165,25,7)
   quad(314,165,310,170,303,161,310,161)
   rect(303,159,15,3)
   rect(314,152,12,10)
   rect(315,157,13,10)
   rect(335,167,8,4)
   rect(314,150,17,4)
   rect(319,130,4,30)
   rect(325,185,30,5)
   rect(355,165,4,25)
   rect(350,172,14,3)
   rect(364,185,5,5)
   rect(372,185,5,5)
   rect(380,185,5,5)
   rect(388,185,5,5)
   rect(396,185,5,5)
   rect(404,185,5,5)
   rect(412,185,5,5)
   rect(420,185,5,5)

   //tree
   beginShape()
   vertex(0,0)
   vertex(100,0)
   vertex(75,50)
   vertex(90,40)
   vertex(94,38)
   vertex(110,0)
   vertex(115,0)
   vertex(110,15)
   vertex(125,0)
   vertex(130,0)
   vertex(110,20)
   vertex(100,38)
   vertex(145,0)
   vertex(185,0)
   vertex(130,38)
   vertex(75,90)
   vertex(70,92)
   vertex(68,110)
   vertex(71,107)
   vertex(65,125)
   vertex(70,125)
   vertex(65,130)
   vertex(65,150)
   vertex(85,140)
   vertex(115,120)
   vertex(150,80)
   vertex(165,80)
   vertex(195,50)
   vertex(215,25)
   vertex(223,22)
   vertex(260,0)
   vertex(280,0)
   vertex(267,20)
   vertex(327,0)
   vertex(347,0)
   vertex(263,40)
   vertex(225,45)
   vertex(210,65)
   vertex(207,65)
   vertex(197,75)
   vertex(177,100)
   vertex(152,125)
   vertex(122,150)
   vertex(65,200)
   vertex(55,230)
   vertex(55,237)
   vertex(64,237)
   vertex(52,247)
   vertex(47,278)
   vertex(107,266)
   vertex(109,251)
   vertex(117,237)
   vertex(120,235)
   vertex(123,237)
   vertex(117,268)
   vertex(132,248)
   vertex(192,228)
   vertex(133,258)
   vertex(117,278)
   vertex(80,290)
   vertex(40,310)
   vertex(20,400)
   vertex(0,400)
   endShape()

   beginShape()
   vertex(551,63)
   vertex(551,63)
   curveVertex(583,40)
   curveVertex(595,20)
   curveVertex(582,8)
   vertex(570,17)
   curveVertex(572,8)
   curveVertex(580,0)
   curveVertex(605,1)
   curveVertex(614,12)
   curveVertex(617,36)
   curveVertex(611,65)
   curveVertex(597,84)
   curveVertex(589,98)
   curveVertex(589,98)
   endShape()

   beginShape()
   vertex(486,110)
   vertex(486,110)
   curveVertex(473,85)
   curveVertex(460,66)
   curveVertex(438,53)
   curveVertex(414,50)
   curveVertex(387,55)
   curveVertex(379,73)
   vertex(381,95)
   curveVertex(385,81)
   curveVertex(396,68)
   curveVertex(421,72)
   curveVertex(432,82)
   curveVertex(438,101)
   curveVertex(438,101)
   endShape()

   beginShape()
   vertex(555,169)
   vertex(555,169)
   curveVertex(589,151)
   curveVertex(611,135)
   curveVertex(629,106)
   curveVertex(649,73)
   curveVertex(673,58)
   curveVertex(710,60)
   curveVertex(736,108)
   vertex(744,134)
   curveVertex(730,126)
   curveVertex(724,114)
   curveVertex(703,92)
   curveVertex(678,110)
   curveVertex(653,146)
   curveVertex(638,175)
   curveVertex(622,204)
   curveVertex(615,230)
   curveVertex(615,230)
   endShape()
}

function mouseClicked()
{
   if(mouseX > 545 && mouseX < 590 && mouseY > 89 && mouseY < 149)
   {
      isPressed = !isPressed;
      flowerColor = !flowerColor;
   }
}