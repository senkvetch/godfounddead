var seiko;
var seikocurs;
var caveat;
var shadows;

var myFonts = []

function preload(){
  seiko = loadFont('assets/Seiko-Regular.ttf')
  seikocurs = loadFont('assets/Seikocurs-Regular.ttf')
  caveat = loadFont('assets/Caveat.ttf')
  shadows = loadFont('assets/ShadowsIntoLight-Regular.ttf')
}

function setup() {
  createCanvas(750, 925);
  myFonts = [seiko, seikocurs, caveat, shadows];
}

function draw() {
  frameRate(3);
  background ('#618353');
  textFont (seiko);
  textSize (48);
  fill ('white');
  text ('follow the', 230, 460);
  if (mouseX > 400 & mouseX < 500 & mouseY > 400 & mouseY < 475){
    fill ('#FFC240');
    textFont (random(myFonts));
    text ('gold', 400, 460)
  }
  else{
    fill ('#FFC240');
    textFont (seikocurs);
    text ('gold', 400, 460)
  }
}