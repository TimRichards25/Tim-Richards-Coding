let press = false;

function m2da(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;
let colour = [0, 0, 0];

function setup() {
  createCanvas(round(windowWidth - 5, -1), round(windowHeight - 5, -1)); //1140, 960
  console.log(width, height);
  cols = width / resolution;
  rows = width / resolution;

  grid = m2da(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = round(random(0.6));
    }
  }
}

function draw() {
  background(colour);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;

      if (grid[i][j] == 1) {
        if (press == false) {
          fill(255, 0, 50);
        } else {
          fill(0, 0, 200);
        }
        noStroke();
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  let next = m2da(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      let sum = 0;
      let nb = cn(grid, i, j);

      if (state == 0 && nb == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (nb < 2 || nb > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  grid = next;
}

function cn(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;

      sum += grid[col][row];
    }
  }

  sum -= grid[x][y];
  return sum;
}

function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (mouseX > cols && mouseX < cols + resolution && mouseY > rows && mouseY < rows + resolution) {
        press = true;
      }
    }
  }
}
