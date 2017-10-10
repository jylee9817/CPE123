//variables
var isClick;

function setup() 
{
   createCanvas(600, 400);
   background(255);
   isClick = false;
}

function drawFlower()
{
   push();
      translate(300,150)

      //stem of the flower - bezierVertex
      /*
         beginShape();
            bezierVertex();
         endShape();
      */

      //pallet of the flower 1 - bezierVertex
      /*
         for(i=0;i<2*PI;i=+PI/8){
            push();
               bezierVertex();
               rotate();
            pop();
         }
      */

      //pallet of the flower 2 - bezierVertex


      //the middle part of the flower
      fill(125,50,0);
      ellipse(0,0,100,100);

      //texture of the sunflower
      /*
      translate to one edge of the flower
      bezier starts with the strong curve to the left
      for(i=0;i<10;i++){
         as the line move left to right, the curve curves to the right
      }
      */

   pop();
}

function drawEye()
{
   //the pupil of the eye - bezierVertex
   /*while(i<10 && isClick){
      creating effect to make eye open up slowly
   }
   while(i>10 && !isClick){
      eye is closed slowly
   }
   */
}

function whileClicked()
{
   isClick = !isClick;
}

function draw() 
{
   drawFlower();
   drawEye();
}
