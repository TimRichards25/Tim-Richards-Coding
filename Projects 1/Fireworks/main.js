let fireworks = [];
let gravity;
let bang;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.05);
  stroke(255);
  strokeWeight(10);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 60);
  if (random(1) < 0.02) {
    fireworks.push(new Firework());
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
