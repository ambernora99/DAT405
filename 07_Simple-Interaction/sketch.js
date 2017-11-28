//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Simple Interaction

//Define variables for the RGB
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(400, 400);
  stroke(0);
}

function draw() {
  //background(0);
  //When mouse is pressed, change randomly the RGB variables
background(0)



    fill(255, 0, 0, mouseX);
    rect(0, 0, 200, 200);

    fill(97, 255, 51, mouseY);
    rect(200, 0, 200, 200);

    fill(51, 245, 255, mouseX);
    rect(0, 200, 200, 200);

    fill(247, 51, 255, mouseY);
    rect(200, 200, 200, 200);



  }
