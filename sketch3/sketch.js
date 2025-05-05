var seikocurs;
var seiko;
var clickCount = 0;
var x = [];
var y = [];

function preload(){
  seikocurs = loadFont('Seikocurs-Regular.ttf')
  seiko = loadFont('Seiko-Regular.ttf')}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background('#618353');
  textAlign (CENTER,CENTER);
  textSize (60);
  for(i = 0; i<clickCount; i++){
    textFont (seiko);
    fill('green');
    text("WRONG", x[i], y[i]);
  }
  textFont (seikocurs);
  fill ("white");
  text ("the day god died everyone knew something was", 100,300, 500);
  fill ('gold');
  textFont (seiko);
  text ("WRONG", 350, 450);
  frameRate (3);
  if (mouseX > 250 && mouseX < 410 && mouseY > 420 && mouseY < 470){
      clickCount++;
      print(clickCount);
      x.push(random(width));
      y. push(random(height));
}
}
