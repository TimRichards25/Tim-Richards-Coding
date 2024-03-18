let snow = [];
let gravity;

let spritesheet;
let textures = [];

let bg;

function preload() {
  bg = loadImage("Snowy Scene.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    snow.push(new Snowflake(x, y));
  }
}

function draw() {
  background(bg);
  snow.push(new Snowflake());
  snow.push(new Snowflake());
  snow.push(new Snowflake());
  snow.push(new Snowflake());
  snow.push(new Snowflake());
  for (let flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

  // for(let i = snow.length-1; i >= 0; i --){
  // 	if(snow[i].offScreen()){
  // 		snow.splice(i, 1);
  // 	}
  // }
}
