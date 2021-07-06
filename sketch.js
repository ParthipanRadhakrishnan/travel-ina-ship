var ship_animation;
var sea_image;
var ship;
var sea;

function preload(){
 ship_animation = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
 sea_image = loadImage("sea.png");

}



function setup(){
  createCanvas(400,400);
  // sprites
  sea = createSprite(200,200)
  sea.addAnimation("sea" , sea_image)
  sea.scale = 0.3
 
  sea.velocityX = 2
 

  ship = createSprite(50,250);
  ship.addAnimation("moving" , ship_animation);
  ship.scale = 0.3
  ship.velocityX = 2

 //
 
}

function draw() {
  
 
  if(sea.x<0){
    sea.x = sea.width / 2;
  }
  
     
  
  drawSprites();
}