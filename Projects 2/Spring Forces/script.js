let y = 0;
let velocity = 0;
let restLength = 200;
let k = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  fill(0, 255, 0);
  ellipse(width / 2, y, 50);

  let x = y - restLength;
  let force = -k * x;

  //F=M*A
  //F = A
  velocity += force;
  y += velocity;

  velocity *= 0.99;
}
