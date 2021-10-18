const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var box1;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1360,650);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
//first floor
  box1 = new Box(330,640,30,40);
  box2 = new Box(360,640,30,40);
  box3 = new Box(390,640,30,40);
  box4 = new Box(420,640,30,40);
  box5 = new Box(450,640,30,40);
  //second floor
  box6 = new Box(330,580,30,40);
  box7 = new Box(360,580,30,40);
  box8 = new Box(390,580,30,40);
  box9 = new Box(420,580,30,40);
  box10 = new Box(450,580,30,40);
  //third floor
  box11 = new Box(330,520,30,40);
  box12 = new Box(360,520,30,40);
  box13 = new Box(390,520,30,40);
  box14 = new Box(420,520,30,40);
  box15 = new Box(450,520,30,40);
  //fourth floor
  box16 = new Box(330,460,30,40);
  box17 = new Box(360,460,30,40);
  box18 = new Box(390,460,30,40);
  box19 = new Box(420,460,30,40);
  box20 = new Box(450,460,30,40);
 
  //fifth floor
  box21 = new Box(330,400,30,40);
  box22 = new Box(360,400,30,40);
  box23 = new Box(390,400,30,40);
  box24 = new Box(420,400,30,40);
  box25 = new Box(450,400,30,40);
  //sixth floor
  box26 = new Box(330,340,30,40);
  box27 = new Box(360,340,30,40);
  box28 = new Box(390,340,30,40);
  box29 = new Box(420,340,30,40);
  box30 = new Box(450,340,30,40);
  //seventh floor
  box31 = new Box(330,280,30,40);
  box32 = new Box(360,280,30,40);
  box33 = new Box(390,280,30,40);
  box34 = new Box(420,280,30,40);
  box35 = new Box(450,280,30,40);
  //eighth floor
  box36 = new Box(330,220,30,40);
  box37 = new Box(360,220,30,40);
  box38 = new Box(390,220,30,40);
  box39 = new Box(420,220,30,40);
  box40 = new Box(450,220,30,40);
  //ninth floor
  box41 = new Box(330,160,30,40);
  box42 = new Box(360,160,30,40);
  box43 = new Box(390,160,30,40);
  box44 = new Box(420,160,30,40);
  box45 = new Box(450,160,30,40);
  //tenth floor
  box46 = new Box(330,100,30,40);
  box47 = new Box(360,100,30,40);
  box48 = new Box(390,100,30,40);
  box49 = new Box(420,100,30,40);
  box50 = new Box(450,100,30,40);


  ball = Bodies.circle(1000,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:1000,y:200});
}

function draw() {
  background(0);  
  Engine.update(engine)

  ground.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();

  


  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}