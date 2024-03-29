function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeigbours = function () {
    let neighbours = [];

    let top = grid[index(i, j - 1)];
    let right = grid[index(i + 1, j)];
    let bottom = grid[index(i, j + 1)];
    let left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbours.push(top);
    }

    if (right && !right.visited) {
      neighbours.push(right);
    }

    if (bottom && !bottom.visited) {
      neighbours.push(bottom);
    }

    if (left && !left.visited) {
      neighbours.push(left);
    }

    if (neighbours.length > 0) {
      let r = floor(random(0, neighbours.length));
      return neighbours[r];
    } else {
      return undefined;
    }
  };

  this.highlight = function () {
    let x = this.i * w;
    let y = this.j * w;
    strokeWeight(5);
    stroke(255);
    fill(255);
    rect(x, y, w, w);
  };

  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;
    strokeWeight(5);
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
    if (this.visited) {
      noStroke();
      fill(0, 1);
      rect(x, y, w, w);
    }
  };
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.j - b.j;

  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
