var a = 0;

function preload(){
  seiko = loadFont('Seiko-Regular.ttf')
  page= loadImage('gfdpg2.jpg')
}

function setup() {
  createCanvas(750, 925);
}

function draw() {
  image(page, 0, 0);
  fill(0, a);
  stroke (243, 255, 238,a);
  strokeWeight (35)
  textFont (seiko);
  textSize (200);
  text("DEAD", 60, 840);
  if (mouseX < 400 & mouseY > 700){
    a = a + 5;
  }
}