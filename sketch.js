console.log("this is mysketch.js comment");

var ghx, ghy, elx, ely, erx, ery, d; //groundhogX and Y, eyeleftX and Y, eyerightX and Y, diameter

function setup() {
    var myCanvas = createCanvas(800, 250);
    //has to parent to an id 
    myCanvas.parent('mySketch');
     background(66, 66, 66);
}

function draw() {
  if (mouseIsPressed) {
    fill(66, 66, 66);
  } else {
    fill(255);
  }
  rect(mouseX, mouseY, 80, 80);
}