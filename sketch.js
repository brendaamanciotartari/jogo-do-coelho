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
var fundo;
var comida;
var coelho;
var ricardao;
var botao;

function preload(){
  fundo = loadImage("./Imagens/background.png");
  comida = loadImage("./Imagens/melon.png");
  coelho = loadImage("./Imagens/Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  melancia = Bodies.circle(300,300,15);

  chao = new Chao(200,690,600,20);
  corda = new Rope(6,{x:245, y:30});
  ligacao = new Ligacao(corda,melancia);
  
  Matter.Composite.add(corda.body, melancia);
  ricardao = createSprite(250,602,100,100);
  ricardao.addImage(coelho);
  ricardao.scale = 0.3

  botao = createImg("./Imagens/cut_button.png");
  botao.position(220,30);
  botao.size(50,50);
  botao.mouseClicked(quebrar);
}

function draw() 
{
  background(51);
  image(fundo, width/2, height/2, 500, 700);
  Engine.update(engine);
  chao.mostrar();
  corda.mostrar();
  drawSprites();
  image(comida,melancia.position.x, melancia.position.y, 100, 100);
}

function quebrar(){
  corda.break();
  ligacao.quebrar();
  ligacao = null;
}


