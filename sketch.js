var car1,wall;

var speed,weight;

function setup(){
  createCanvas(1600,400);

  car1=createSprite(50,180,30,10);

  wall=createSprite(1500,200,60,200);
  wall.shapeColor=(80,80,80);

  speed=random(15,45); 
  weight=random(400,1500);




}

function draw(){
background("black");
  car1.velocityX=speed;


  car1.collide(wall);

  if(wall.x-car1.x <= car1.width/2+wall.width/2){
    car1.velocityX=0;
    var d= 0.5 * weight * speed * speed/22509;
    if(d>0&&d<=10){
      car1.shapeColor=color(225,0,0);
    }

    if(d>10 && d<=15){
      car1.shapeColor=color(230,230,0);
    }  

    if(d>15 && d<=100){
      car1.shapeColor=color("green");

    }


  }


 drawSprites();
}