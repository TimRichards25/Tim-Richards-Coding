function Asteroid(pos, r, img) {
  this.pos = pos.copy();
  this.r = r;
  this.vel = p5.Vector.random2D();
  this.total = floor(random(5, 15));
  this.img = img;
  this.offset = [];
  for (let i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
  }

  this.update = function () {
    this.pos.add(this.vel);
  };

  this.render = function () {
    push();

    // strokeWeight(4);
    // stroke(0, 255, 0);
    // noFill();
    translate(this.pos.x, this.pos.y);
    // for(let i = 0; i < 6; i++)
    image(this.img, 0, 0, this.r * 2, this.r * 2);
    noFill();
    stroke(255);
    // rectMode(CENTER);
    rect(0, 0, this.r * 2, this.r * 2);

    noFill();
    // rect(0, 0, this.r, this.r)
    //}

    // beginShape();
    // for (let i = 0; i < this.total; i++) {
    //   let r = this.r + this.offset[i];
    //   let ang = map(i, 0, this.total, 0, TWO_PI);
    //   let x = r * cos(ang);
    //   let y = r * sin(ang);
    //   vertex(x, y);
    // }
    // endShape(CLOSE);

    pop();
  };

  this.breakup = function () {
    let newA = [];
    newA[0] = new Asteroid(this.pos, this.r * 0.8, this.img);
    newA[1] = new Asteroid(this.pos, this.r * 0.8, this.img);

    return newA;
  };

  this.edges = function () {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  };
}
