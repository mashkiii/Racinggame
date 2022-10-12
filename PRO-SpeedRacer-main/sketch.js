var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();

  game.start();
  
  
}

function draw() {
  background(backgroundImage);
  if (playerCount==2){
    game.update(1);
  }
  if (gameState==1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
