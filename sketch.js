const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var box6

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,300,300,20)
    box1 = new Box(700,270,100,70);
    box2 = new Box(500,270,100,70);
    box3 = new Box(600,270,100,70);
    box4 = new Box(550,200,100,70);
    box5 = new Box(650,200,100,70);
    box6 = new Box(600,130,100,70);
    pg = new Bird(300,100)
    slingshot = new SlingShot(pg.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display(); 
    box5.display();
    ground.display(); 
    box6.display();
    pg.display();
    slingshot.display();
}
function mouseDragged(){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}






function mouseReleased(){
    slingshot.fly();
    
}