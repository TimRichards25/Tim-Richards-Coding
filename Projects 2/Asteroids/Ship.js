function Ship(w, h) {
  this.pos = createVector(width / 2, height / 2);
  this.w = w;
  this.h = h;
  this.head = 0;
  this.rotation = 0;
  this.vel = createVector(0, 0);
  this.isBoosting = false;

  this.boosting = function (b) {
    this.isBoosting = b;
  };

  this.hits = function (asteroid) {
    // let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    // return d < (this.w + this.h) / 2 + asteroid.r;
    // return (
    //   this.x < asteroid.x + asteroid.r * 2 && this.x + this.w > asteroid.x && this.y < asteroid.y + asteroid.r * 2 && this.y + this.h > asteroid.y
    // );
    return true;
  };

  this.update = function () {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  };

  this.boost = function () {
    let force = p5.Vector.fromAngle(this.head);
    force.mult(0.5);
    this.vel.add(force);
  };

  this.render = function () {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.head + PI / 2);
    fill(0, 255, 0);
    strokeWeight(3);
    stroke(0, 255, 0);
    imageMode(CENTER);
    noFill();
    // rectMode(CENTER)
    // rect(0, 0, this.r, this.r)
    image(shipImg, 0, 0, this.w, this.h);
    noFill();
    stroke(255);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
    pop();
  };

  this.edges = function () {
    if (this.pos.x > width + this.w / 2) {
      this.pos.x = -this.w / 2;
    } else if (this.pos.x < -this.w / 2) {
      this.pos.x = width + this.w / 2;
    }
    if (this.pos.y > height + this.h / 2) {
      this.pos.y = -this.h / 2;
    } else if (this.pos.y < -this.h / 2) {
      this.pos.y = height + this.h / 2;
    }
  };

  this.setRotation = function (a) {
    this.rotation = a;
  };

  this.turn = function () {
    this.head += this.rotation;
  };
}
