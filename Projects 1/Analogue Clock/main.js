function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  //                          Clock base
  strokeWeight(20);
  stroke(0, 0, 200);
  point(0, 0);

  strokeWeight(20);
  stroke(230, 0, 255);
  fill(50, 0, 50);
  ellipse(0, 0, 400);

  let hr = hour();
  let mn = minute();
  let sc = second();
  noFill();
  strokeWeight(10);

  //                          Second hand
  let sc_ang = map(sc, 0, 60, 0, 360) - 90;
  // arc(0, 0, 300, 300, 0, sc_ang);

  push();
  rotate(sc_ang);
  stroke(225, 0, 255);
  line(0, 0, 150, 0);
  pop();

  //                          Minute hand
  let mn_ang = map(mn, 0, 60, 0, 360) - 90;
  // arc(0, 0, 250, 250, 0, mn_ang);

  push();
  rotate(mn_ang);
  stroke(195, 0, 255);
  line(0, 0, 125, 0);
  pop();

  //                          Hour hand
  let hr_ang = map(hr, 0, 12, 0, 360) - 90;

  push();
  rotate(hr_ang);
  stroke(165, 0, 255);
  line(0, 0, 100, 0);
  pop();

  //                          Numbers
  // textSize(23);
  // textAlign(CENTER);
  // fill(255);
  // noStroke();
  // text('12', 0, -192);
  // text('1', 80, -172);
  // text('2', 0, -192);
  // text('3', 199, 0);
  // text('4', 0, -192);
  // text('5', 0, -192);
  // text('6', 0, 208);
  // text('7', 0, -192);
  // text('8', 0, -192);
  // text('9', -200, 0);
  // text('10', 0, -192);
  // text('11', 0, -192);
}
