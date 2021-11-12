var scarybg ,backgroundimg ,zombies ,zombieimg,hunter,hunterimg;

function preload(){
  backgroundimg=loadImage('scary background.jpg');
  zombieimg=loadImage('zombie.png');
  hunterimg=loadImage('hunter.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  scarybg=createSprite(displayWidth/2.2,displayHeight/2.2);
  scarybg.addImage(backgroundimg);  
  
  zombies=createSprite(220,380,10,10);
  zombies.addImage(zombieimg);

  hunter=createSprite(825,390,10,10);
  hunter.addImage(hunterimg);
}

function draw() {
  background('black');  
  drawSprites();
}
