let n1 = 0.7;
let n2 = 0.7;
let n3 = 0.7;
let m = 2;
let a = 1;
let b = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function supershape(theta) {
  let r = 1;

  let part1 = (1 / a) * cos((theta * m) / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  let part2 = (1 / b) * sin((theta * m) / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  let part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
    return 0;
  }
  return 1 / part3;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let slider = floor(map(mouseX, 0, width, 0, 20));
  m = slider;
  stroke(168, 54, 255);
  strokeWeight(10);
  noFill();

  let rad = 400;

  let total = 1000;
  let increment = TWO_PI / total;

  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += increment) {
    let r = supershape(angle);
    let x = rad * r * cos(angle);
    let y = rad * r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}
