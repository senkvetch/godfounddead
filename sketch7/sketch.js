var a = 0;
var b = 0;
var c = 0;
var d = 0;
var speed= 10;

function setup() {
  createCanvas(750, 925);
}

function preload(){
  bg = loadImage('gfdpg7.jpg');
  seiko = loadFont('Seiko-Regular.ttf')
}

function draw() {
  background(220);
  image (bg, 0, 0);
  textFont (seiko);
  textSize (40);
  strokeWeight (5);
  stroke (255, a);
  fill (0, a)
  text ('GOD IS DEAD AND EVERYTHING IS LOST', 35, 130)
  stroke (255, b);
  fill (0, b)
  text ('GOD IS DEAD AND EVERYTHING IS LOST', 65, 350)
  stroke (255, c);
  fill (0, c)
  text ('GOD IS DEAD AND EVERYTHING IS LOST', 120, 580)
  stroke (255, d);
  fill (0, d)
  text ('GOD IS DEAD AND EVERYTHING IS...', 190, 800)
  if (mouseX > 680 && mouseX < 730 && mouseY < 250){
    a = a + speed
  }
  else if(mouseX> 680 && mouseX < 730 && mouseY > 250 && mouseY < 450){
    b = b + speed
  }
  else if(mouseX> 680 && mouseX < 730 && mouseY > 450 && mouseY < 690){
    c = c + speed
  }
  else if(mouseX> 680 && mouseX < 730 && mouseY > 690 && mouseY < 925){
    d = d + speed
  }
}