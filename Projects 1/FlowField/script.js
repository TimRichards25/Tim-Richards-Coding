let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(cols * rows);

  for (let i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }

  colorMode(HSB, 360, 100, 100, 100);
}

function keyPressed() {
  if (key === " ") {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
}

function draw() {
  // background(0, 0, 0, 5);
  // background(0);
  let yoff = 0;
  for (let y = 0; y < rows + 2; y++) {
    let xoff = 0;
    for (let x = 0; x < cols + 2; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 0.25;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.1);
      flowfield[index] = v;
      xoff += inc;
      // stroke(255, 100);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    // zoff += 1;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  // fr.html(floor(frameRate()))
}
