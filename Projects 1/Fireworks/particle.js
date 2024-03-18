function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;

  if (this.firework) {
    this.vel = createVector(0, random(-height / 60, -height / 120));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0, 4));
  }
  this.acc = createVector(0, 0);

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.update = function () {
    if (this.firework) {
      this.vel.mult(0.99);
      this.lifespan -= 0;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.done = function () {
    return this.lifespan < 0;
  };

  this.show = function () {
    colorMode(HSB);
    if (!this.firework) {
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(5);
      stroke(this.hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  };
}
