let cols, rows;
let w = 50;
let grid = [];

let current;

let stack = [];

function setup() {
  strokeWeight(5);
  // frameRate(10);
  createCanvas(round(windowWidth, 10), windowHeight);
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  console.log(round(mouseX));
  background(0);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  //Step 1
  let next = current.checkNeigbours();
  if (next) {
    next.visited = true;
    //Step 2
    stack.push(current);
    //Step 3
    removeWalls(current, next);
    //Step 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

  textSize(15);
  noStroke();
  fill(0);
  text('Start', w / 6, w / 2);
  fill(255);
  text('End', round(width, 10) - w, round(height, 10) - w);
}

function index(i, j) {
  6;
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}
