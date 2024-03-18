let angle = 0;
// let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // slider = createSlider(0, TWO_PI, 0.334, 0.001);
}

function draw() {
  background(0);
  // angle = slider.value();
  angle = map(mouseX, 0, width, 0, PI);
  translate(width / 2, height);
  stroke(0, 255, 0);
  branch(300);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 20) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(angle * 2);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle * 2);
    branch(len * 0.67);
    pop();
  }
}
