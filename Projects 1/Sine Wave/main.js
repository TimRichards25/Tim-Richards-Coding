let orangeCircle;

function preload() {
  orangeCircle = loadImage('./Orange Faded Circle.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let f = frameCount;
  imageMode(CENTER);

  for (let i = 0; i < width / 10; i++) {
    let x = 0;
    let y = 400 * sin(f * 0.1 + i / 30);
    noStroke();
    fill(255, 80, 0);
    ellipse(x + i * 10, y + height / 2, 70, 70);
  }
}
