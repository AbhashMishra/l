var backgroundImg,BG;

function preload() {
  backgroundImg = loadImage("firewar.png.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  BG = createSprite(width/2,height-700,width,50);
  BG.scale = 0.6;
  BG.addImage(backgroundImg);
  BG.velocityX = -5;
  BG.x = width/2;
  
}

function draw() {  
  background(0);
  
  if (BG.x < 0){
      BG.x = BG.width/2;
    }
  
  drawSprites();
}