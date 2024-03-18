const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  alignSlider = createSlider(0, 6, 3, 0.1);
  alignSlider.position((windowWidth / 8) * 3 - 50, (windowHeight / 8) * 7.7);
  alignSlider.size(100);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider.position(windowWidth / 2 - 50, (windowHeight / 8) * 7.7);
  cohesionSlider.size(100);
  separationSlider = createSlider(0, 4, 2.2, 0.1);
  separationSlider.position((windowWidth / 8) * 5 - 50, (windowHeight / 8) * 7.7);
  separationSlider.size(100);

  for (let i = 0; i < 200; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(0);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }

  fill(255, 100, 0);
  textSize(30);
  textAlign(CENTER);
  text('Alignment', (windowWidth / 8) * 3, (windowHeight / 8) * 7.6);
  text('Cohesion', windowWidth / 2, (windowHeight / 8) * 7.6);
  text('Separation', (windowWidth / 8) * 5, (windowHeight / 8) * 7.6);
}
