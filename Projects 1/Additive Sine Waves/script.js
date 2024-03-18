class Wave {
  constructor(amp, period, phase) {
    this.amp = amp;
    this.period = period;
    this.phase = phase;

    this.dir = 1;
  }

  evaluate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period) * this.amp;
  }

  update() {
    this.phase += 0.1;

    if (this.amp < 50 && this.amp > 20) {
      this.dir = +this.dir;
    } else {
      this.dir = -this.dir;
    }

    this.amp += this.dir * noise(1, 10);
  }
}

let waves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 25; i++) {
    waves[i] = new Wave(random(20, 30), random(100, 600), random(0, TWO_PI));
  }
}

function draw() {
  background(0);

  for (let x = 0; x < width; x += 2) {
    let y = 0;
    for (let wave of waves) {
      y += wave.evaluate(x);
    }

    noStroke();
    fill(0, 0, 255);
    ellipse(x, y + height / 2, 10);
  }

  for (let wave of waves) {
    wave.update();
  }
}
