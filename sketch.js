const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,tower1,tower2,building;
var l1,l2,l3,l4,l5,l6,l7,l8,l9;
var door;

function setup(){
    var canvas = createCanvas(400,400);
    //var back=createSprite(600,200,1200,400);
    //back.addImage(bg);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,400,400,50);
    tower1 = new Tower(90,238,75,275);
    tower2 = new Tower(310,238,75,275);
    building = new Building(200,275,150,200);
    l1 = new Tower(90,100.5,100,20,PI);
    l2 = new Tower(70,70,80,20,-PI/4);
    l3 = new Tower(110,70,80,20,PI/4);
    l4 = new Tower(310,100.5,100,20,PI);
    l5 = new Tower(290,70,80,20,-PI/4);
    l6 = new Tower(330,70,80,20,PI/4);
    l7 = new Tower(200,170,150,20,PI);
    l8 = new Tower(170,130,100,20,-PI/4.5);
    l9 = new Tower(230,130,100,20,PI/4.5);
    door = new Door(200,300,80,150);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
  tower1.display();
  tower2.display();
  building.display();
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();
  l6.display();
  l7.display();
  l8.display();
  l9.display();
  door.display();

}