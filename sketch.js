var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200, 200, 100, 50);
  bullet.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
  speed=random(223,321);
  weight=random(30, 52);
  thickness=random(22, 83);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
   var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
   console.log("check:",damage);
   if(damage>10){
     wall.shapeColor="red";
   }
   if(damage<10){
    wall.shapeColor="green";
   }
  }

  drawSprites();
}
function hasCollided (bullet, wall ) {
  bulletRightEdge=bullet.x + wall.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  } else{
    return false;
  }
}