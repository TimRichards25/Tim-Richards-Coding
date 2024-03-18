function getRandomSize() {
  // while (true) {
  // 	let r1 = random(1);
  // 	let r2 = random(1);
  // 	if (r2 > r1) {
  // 		return r1 * 25;
  // 	}
  // }

  let r = randomGaussian() * 2;
  return constrain(abs(r * r), random(1, 15), 20);
}

class Snowflake {
  constructor(sx, sy) {
    let x = sx || random(width);
    let y = sy || random(-10, -100);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r);

    this.acc.add(f);
  }

  // random

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  offScreen() {
    return this.pos.y > height + this.r;
  }
}
