var seikocurs;
var size = 48;
var speed= .3;



function preload(){
  seikocurs = loadFont('assets/Seikocurs-Regular.ttf')
}

function setup() {
  createCanvas(750, 925);
}

function draw() {
  background('#618353');
 
  fill('gold');
  if (mouseX > 275 & mouseX < 475 & mouseY < 500 & mouseY > 400 ){
  size = size + speed
  textFont (seikocurs);
  textAlign (CENTER,CENTER);
  textSize (size);
  text ('breathe.', 375, 460)
  }
  else{
    textAlign (CENTER,CENTER);
    textFont (seikocurs);
    textSize (size);
    text ('breathe.', 375, 460)
  }
   if (size > 70 || size < 45) {
    speed= speed* -1
    }
}