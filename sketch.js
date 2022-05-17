const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var chao;
var corda;
var melancia;
var ligacao;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  melancia = Bodies.circle(300,300,15);

  chao = new Chao(200,690,600,20);
  corda = new Rope(6,{x:245, y:30});
  ligacao = new Ligacao(corda,melancia);
  
  Matter.Composite.add(corda.body, melancia);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  chao.mostrar();
  corda.mostrar();
  ellipse(melancia.position.x, melancia.position.y, 15, 15);
}




