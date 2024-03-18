let inc = 0.005;
let s = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  stroke(0, 200, 0);
  strokeWeight(5);
  noFill();
  beginShape();
  let xoff = s;
  for (let x = 0; x < width; x++) {
    stroke(0, 255, 0);

    let y = (noise(xoff) * height * 5) / 5 + height / 8;

    vertex(x, y);
    xoff += inc * 1;
  }

  endShape();

  s += inc * 10;
  loop();
}
