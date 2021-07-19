var seaImg, shipImg1 , sea, ship 

function preload(){

  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
   
}

function setup(){
  createCanvas(400,400);
   
  sea = createSprite(400,200);
  sea.velocityX = -5;
  sea.addImage(seaImg);
  sea.scale = 0.5;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("moving", shipImg1);
  ship.scale = 0.3;
  
}

function draw() {
  background("blue");
  drawSprites();

  if(sea.x<0){
     sea.x = sea.width/8;
  }
  drawSprites();
} 