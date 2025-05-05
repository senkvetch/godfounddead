var seiko;
var seikocurs;
var caveat;
var shadows;

var myFonts = [];

function preload() {
  seiko = loadFont("assets/Seiko-Regular.ttf");
  seikocurs = loadFont("assets/Seikocurs-Regular.ttf");
  caveat = loadFont("assets/Caveat.ttf");
  shadows = loadFont("assets/ShadowsIntoLight-Regular.ttf");
}

function setup() {
  createCanvas(750, 925);
  myFonts = [seiko, seikocurs, caveat, shadows];
}

function draw() {
  frameRate(3);
  background("#618353");
  textFont(seiko);
  textSize(48);
  fill("white");
  text("hover over the", 180, 418);
  text("to interact", 280, 480);
  if ((mouseX > 430) & (mouseX < 600) & (mouseY > 370) & (mouseY < 430)) {
    fill("#FFC240");
    textSize(70);
    textFont(random(myFonts));
    text("gold", 440, 420);
  } else {
    fill("#FFC240");
    textSize(70);
    textFont(seikocurs);
    text("gold", 440, 420);
  }
}
