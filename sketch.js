var balloon,balloonimg,balloon1;

function preload(){
 balloonimg=loadImage("Images/Hot Air Ballon-02.png")
}




function setup() {
  createCanvas(500,500);
balloon=  createSprite(400, 200, 50, 50);
balloon1.addImage("balloon",baloonimg)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}