let ps = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  fill(255, 0, 0);
  // ellipse(mouseX, mouseY, 10, 10);

  for (let i = 0; i < 10; i++) {
    let p1 = new Part(width / 2, height / 2, 255, 0, 0);
    ps.push(p1);
  }

  for (let i = ps.length - 1; i >= 0; i--) {
    ps[i].show();
    ps[i].move();

    if (ps[i].fd()) {
      ps.splice(i, 1);
    }
  }
}
class Part {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;

    let mx = map(mouseX, 0, width / 3, 0, 5);
    let my = map(mouseY, 0, width / 3, 0, 5);

    this.vx = random(-mx, mx);
    this.vy = random(-my, my);

    this.a = 100;

    this.s = 20;

    this.r = r;
    this.g = g;
    this.b = b;
  }

  fd() {
    return this.a < 0;
  }

  show() {
    fill(this.r, this.g, this.b, this.a);
    noStroke();
    ellipse(this.x, this.y, this.s);
  }

  move() {
    this.a -= width / 1000;
    this.s -= width / 10000;
    this.x += this.vx;
    this.y += this.vy;
  }
}
