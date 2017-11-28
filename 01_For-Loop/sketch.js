//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size
let size = 50;

function setup() {
  createCanvas(500, 500);
  //noLoop(0);
  frameRate(1);
}

function draw() {
  background(0, 0, 0);

  for (let x = 0; x < 500; x+=10) {
    let r = random(50);
    stroke(r*5);
    ellipse(random(500), random(500), random(50+r), random(150));
    fill(random(255), random(255), random(255))
  }

}
