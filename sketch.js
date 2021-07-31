var theif;
var gun;
var Diamond;
var gameOver;
var restart;

function preload(){
 
  theif=loadAnimation("giphy.gif")
  gun=loadImage("gun.png")
  ground=loadImage("ground.png") 
  restart=loadImage("restart.png")
  gameOver=loadImage("gameOver.png")
  diamond=loadImage("Diamond.png")
}
function setup() {
  createCanvas(600, 200);
  
  theif=createSprite(50,180,20,50)
  theif.addAnimation("giphy.gif",giphy.running)
  theif.scale=0.5
  
 

  
}

function draw() {
  
  background(180);
  drawSprites();
 }







