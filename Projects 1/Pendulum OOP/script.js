let penduls = [];
let spacing = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let total = float(height / spacing) + 80;
  for (let i = 0; i < total; i++) {
    penduls[i] = new Pendulum(width / 2, height, spacing + i * spacing, spacing, -1);
  }
  background(0, 0, 0);
}

function draw() {
  background(0, 0, 0, 10);
  for (let pendul of penduls) {
    pendul.update();
    pendul.show();
  }
}
