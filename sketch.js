const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;

var score = 0;

var particle;

var count = 0;

var gameState = 1;
var gameState = 2;

function setup() {
  createCanvas(820,800);

  engine = Engine.create();
	world = engine.world;
  //create Bodies here

  

  ground = new Ground(240,789,1110,10);

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  

  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  // display bodies here

  

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();

  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

 // mousePressed();


  /*if(particle !==null){
    particles.display();
    if(particles.body.position>760)
    {
      if(particles.body.x<300)
      {
        score=score+500;
        particles=null;
        if(count>=5)gameState = "end";
      }
    }
  }*/


  textSize(20);
  text("500",20,550);

  textSize(20);
  text("500",100,550);

  textSize(20);
  text("500",180,550);

  textSize(20);
  text("500",260,550);

  textSize(20);
  text("100",340,550);

  textSize(20);
  text("100",420,550);

  textSize(20);
  text("100",500,550);

  textSize(20);
  text("200",580,550);

  textSize(20);
  text("200",660,550);

  textSize(20);
  text("200",740,550);


  drawSprites();

  textSize(20);
  text("SCORE :"+score,20,20);
}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(width/2,10,10,10);
  }

}