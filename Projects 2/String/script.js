let particles = [];
let springs = [];
let spacing = 0;
let k = 0.025;

let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    particles[i] = new Particle(width / 2, i * spacing);
    if (i !== 0) {
      let a = particles[i];
      let b = particles[i - 1];
      let spring = new Spring(k, spacing, a, b);
      springs.push(spring);
    }
  }
  particles[0].locked = true;
  gravity = createVector(0, 0.25);
}

function draw() {
  background(0);

  for (let s of springs) {
    s.update();
    s.show();
  }

  for (let p of particles) {
    p.applyForce(gravity);
    p.update();
    // p.show();
  }

  let tail = particles[particles.length - 1];

  if (mouseIsPressed) {
    tail.pos.set(mouseX, mouseY);
    tail.vel.set(0, 0);
  }
}
