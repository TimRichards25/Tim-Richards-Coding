let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let origin;

let gravity = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  origin = createVector(width / 2, 0);
  angle = PI / 4;
  bob = createVector();
  len = 700;
}

function draw() {
  background(0);

  let force = gravity * sin(angle);
  angleA = (-1 * force) / len;
  angleV += angleA;
  angle += angleV;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(161, 102, 47);
  strokeWeight(5);
  fill(141, 82, 42);

  line(origin.x, origin.y, bob.x, bob.y);
  strokeWeight(3);
  circle(bob.x, bob.y, 50);
}
