var fixedrect,movingrect

function setup() 
{
  createCanvas(800,400);
  fixedrect=createSprite(400, 300, 50, 50);
  fixedrect.shapeColor="yellow";

  movingrect=createSprite(400,100,50,50);
  movingrect.shapeColor="yellow";
  movingrect.velocityY=1;
  fixedrect.velocityY=-1;
}

function draw()
 {
      background(0);  
       // movingrect.x=mouseX;
        //movingrect.y=mouseY;
      console.log(movingrect.x-fixedrect.x);
    
    if (movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2
      && fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2
      )
      
    {

      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";
      movingrect.velocityX=movingrect.velocityX*(-1);
      fixedrect.velocityX=fixedrect.velocityX*(-1);
    }


    else
    {
      movingrect.shapeColor="green";
      fixedrect.shapeColor="green";
    }
    if (fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2
      && movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2)
      {

        movingrect.shapeColor="red";
        fixedrect.shapeColor="red";
        movingrect.velocityY=movingrect.velocityY*(-1);
        
        fixedrect.velocityY=fixedrect.velocityY*(-1);

      }
    drawSprites();
}