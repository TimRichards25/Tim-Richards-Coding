function Laser(pos, angle) {
  this.pos = createVector(pos.x, pos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(20);

  this.update = function () {
    this.pos.add(this.vel);
  };

  this.render = function () {
    push();
    translate(this.pos.x, this.pos.y);
    strokeWeight(7);
    stroke(255, 0, 0);
    point(0, 0);
    pop();
  };

  this.hits = function (asteroid) {
    let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y + 20);
    return d < asteroid.r;
  };

  this.offscreen = function () {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  };
}
