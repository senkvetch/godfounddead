var crygif = [];
var i = 1;
var step = 1;
var o = 0;
var pause = false;

function preload() {
  cry1 = loadImage("gfdpg8.1.jpg");
  cry2 = loadImage("gfdpg8.2.jpg");
  cry3 = loadImage("gfdpg8.3.jpg");
  seiko = loadFont("Seiko-Regular.ttf");
}

function setup() {
  frameRate(2);
  createCanvas(750, 925);
  crygif = [cry1, cry2, cry3];
}

function draw() {
  background(220);
  textFont(seiko);
  if (pause) {
    image(crygif[i], 0, 0);
  } else {
    image(crygif[i], 0, 0);
    i = step + i;
    if (i >= 3 || i < 0) {
      step = step * -1;
      if (i == 3) {
        i = 2;
      }
      if (i == -1) {
        i = 0;
      }
    }
    textSize(100);
    strokeWeight(10);
    stroke(255);
    fill(0, 255);
    text("LOST.", 80, 150);
  }
  strokeWeight(0);
  textSize(50);
  fill(0, o);
  text("mrrow?", 550, 200);
  if (mouseX > 600 && mouseY > 100 && mouseY < 500) {
    pause = true;
    o = 255;
  }
}

