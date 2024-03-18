let num = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 50, 0);
  strokeWeight(5);

  let sc = second();
  let mn = minute();
  let hr = hour();

  if (hr > 11) {
    hr = hour() - 12;
  } else {
    hr = hour();
  }

  strokeWeight(5);
  stroke(0);
  let sec = map(sc, 0, 60, 0, width);
  fill(0, 200, 0);
  rect(0, 0, sec, height / 3);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(sec / 5);
  if (sc > 0) {
    text('SECONDS', sec / 2, height / 6 + sec / 15);
  }

  stroke(0);
  let min = map(mn, 0, 59, 0, width);
  fill(0, 200, 60);
  rect(0, height / 3, min, height / 3);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(min / 5);
  if (mn > 0) {
    text('MINUTES', min / 2, (height / 6) * 2 + height / 6 + (min / 23) * 2);
  }

  let hor = map(hr, 0, 11, 0, width);
  fill(0, 200, 200);
  strokeWeight(50);
  rect(0, (height / 3) * 2, hor, (height / 3) * 2);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(hor / 5);
  if (hr > 0) {
    text('HOURS', hor / 2, (height / 3) * 2 + height / 6 + hor / 15);
  }
}
