let bob;
let anchor;
let velocity;
let restLength = 700;
let k = 0.01;
let gravity;
let springImg;

function preload() {
  springImg = loadImage('./Spring.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bob = createVector(width / 2, 700);
  anchor = createVector(width / 2, 0);
  velocity = createVector(0, 0);
  gravity = createVector(0, 1);
  background(0);
}

function draw() {
  background(0, 200);
  stroke(0, 0, 200);
  line(bob.x, bob.y, anchor.x, anchor.y);
  // image(springImg, anchor.x, anchor.y, 50, bob.y);
  noStroke();
  strokeWeight(5);
  fill(0, 0, 255);
  ellipse(anchor.x, anchor.y, 25);
  ellipse(bob.x, bob.y, 50);

  if (mouseIsPressed) {
    bob.x = mouseX;
    bob.y = mouseY;
    velocity.setMag(0, 0);
  }

  let force = p5.Vector.sub(bob, anchor);
  let x = force.mag() - restLength;
  force.normalize();
  force.mult(-1 * k * x);

  // //F = A
  velocity.add(force);
  velocity.add(gravity);
  bob.add(velocity);
  velocity.mult(0.99);
}
