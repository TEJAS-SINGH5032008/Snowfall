var snow;
var winter;
var boy;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload(){
winter = loadImage("snow2.jpg")
snow = loadImage("snow4.webp")
boy = loadImage("ayushdevil8010.png")
}

function draw() {
  background(255,255,255);  
  drawSprites();
}