function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.jitter = function () {
    this.end.x += random(-0.5, 0.5);
    this.end.y += random(-0.5, 0.5);
  };

  this.show = function () {
    stroke(0, 255, 200);
    strokeWeight(2);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branchA = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 4);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  };

  this.branchB = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  };

  this.branchC = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 8);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let c = new Branch(this.end, newEnd);
    return c;
  };

  this.branchD = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 8);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let d = new Branch(this.end, newEnd);
    return d;
  };
}
