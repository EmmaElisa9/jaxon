var pista, pistaI;
var surfista, surfistaA;
var limiteD, limiteI;

function preload(){
 
  pistaI = loadImage ("path.png");
  surfistaA = loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  
}

function setup(){
  createCanvas(400,400);
  
  pista = createSprite (200,200,400,400);
  pista.addImage (pistaI);
  pista.velocityY = 5;
  
  surfista = createSprite(200,300,50,50);
  surfista.addAnimation ("runing",surfistaA);
  
  limiteI = createSprite(375,200,80,400);
  limiteI.visible = false;
  
  limiteD = createSprite(30,200,80,400);
  limiteD.visible = false;
  
}

function draw() {
  background(0);
  
  surfista.x = World.mouseX;

  if (pista.y > 400) {
     pista.y = pista.height/8;
  }
  
  surfista.collide(limiteI);
  surfista.collide(limiteD);
  
  drawSprites();
}
