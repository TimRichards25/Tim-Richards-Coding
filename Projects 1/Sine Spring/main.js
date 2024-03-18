let ang1 = 0;
let angv1 = 0.05;
let ang2 = 0;
let angv2 = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);
  fill(173, 120, 14);
  //let r = map(sin(ang), -1, 1, 0, 200);
  let x = map(sin(ang1), -1, 1, -width / 2 + 16, width / 2 - 16);
  let y = map(sin(ang2), -1, 1, -height / 2 + 16, height / 2 - 16);
  strokeWeight(5);
  stroke(173, 120, 14);
  line(0, 0, x, y);
  circle(x, y, 32);
  ang1 += angv1;
  ang2 += angv2;
  angv1 += random(-0.001, 0.001);
  angv2 += random(-0.001, 0.001);
}
