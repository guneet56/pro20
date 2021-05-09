var car;
var wall;
var  deformation, speed, weight;

function setup() {
  createCanvas(800,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(700, 200, 20, 20);
  car.shapeColor = "blue"


  wall = createSprite(100, 200, 10, 800);
  wall.shapeColor = "white"; 
}

function draw() {
  background("black");  
  car.velocityX = -5;
  if (car.x - wall.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22500;
  }
  if (deformation > 180) {
 
    car.shapeColor = rgb(255, 0, 0);
  }
  if (deformation > 100 && deformation < 180) {
  
    car.shapeColor = rgb(230, 230, 0);
  }
  if (deformation < 100) {
 
    car.shapeColor = rgb(0, 255, 0);
  }
  drawSprites();
}


