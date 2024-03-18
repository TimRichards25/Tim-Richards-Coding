class Pendulum {
  constructor(x, y, r, bobR, gravity) {
    this.origin = createVector(x, y);
    this.position = createVector();
    this.r = r;
    this.angle = PI / 2;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 1;
    this.ballr = bobR;

    this.gravity = gravity;
  }

  update() {
    this.aAcceleration = ((-1 * this.gravity) / this.r) * sin(this.angle);
    this.aVelocity += this.aAcceleration;
    this.aVelocity *= this.damping;
    this.angle += this.aVelocity;
  }

  show() {
    this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
    this.position.add(this.origin);

    stroke(0, 255, 0);
    strokeWeight(1);
    //     line(this.origin.x, this.origin.y, this.position.x, this.position.y);

    ellipseMode(CENTER);
    fill(255, 0, 120, 100);
    noStroke();
    ellipse(this.position.x, this.position.y, this.ballr * 5);
  }
}
