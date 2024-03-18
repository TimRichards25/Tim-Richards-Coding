let tree = [];
let leaves = [];

let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 300);
  let root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
      tree.push(tree[i].branchC());
      tree.push(tree[i].branchD());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 1) {
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
    tree[i].jitter();
  }

  // for (let i = 0; i < leaves.length; i++) {
  //   fill(0, 255, 0, 50);
  //   circle(leaves[i].x, leaves[i].y, 5);
  // }
}
