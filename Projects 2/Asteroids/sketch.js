let ship;
let asteroids = [];
let lasers = [];

let pointsval = 0;

let laserSound;
let backgroundMusic;
let boomSound;
let evilLaughSound;
let asteroidsImg = [];
let stars;
let shipImg;
let moreval = 5;

function preload() {
  laserSound = loadSound('./sfx/laser.wav');
  backgroundMusic = loadSound('./sfx/AbstractMix.wav');
  boomSound = loadSound('./sfx/boom.wav');
  evilLaughSound = loadSound('./sfx/evil laugh.wav');

  for (let i = 0; i < 10; i++) {
    asteroidsImg[i] = loadImage('./img/Asteroids/tile00' + i + '.png');
  }
  stars = loadImage('./img/stars.jpg');
  shipImg = loadImage('./img/SpaceshipFire.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship(shipImg.width / 6, shipImg.height / 6);
  for (let i = 0; i < 25; i++) {
    asteroids.push(new Asteroid(createVector(0, 0), random(30, 50), random(asteroidsImg)));
  }
}

function draw() {
  background(stars);

  // image(bac, 0, 0)

  textSize(20);
  // textAlign(RIGHT);
  fill(0, 255, 0);
  text(pointsval + ' points', 0, 20);

  // console.log(asteroids.length);

  for (let i = 0; i < asteroids.length; i++) {
    // if (asteroids[i].x > width / 3 || asteroids[i].x < (width / 3) * 2) {
    //   asteroids.splice(i, 1);
    // }

    if (ship.hits(asteroids[i])) {
      evilLaughSound.setVolume(1);
      evilLaughSound.play();
      textSize(90);
      textAlign(CENTER);
      fill(0, 255, 0);
      stroke(0, 0, 255);
      strokeWeight(4);
      text('YOU DIED!', width / 2, height / 2);
      noLoop();
    }

    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids.length < moreval) {
      asteroids.push(new Asteroid(createVector(0, 0), random(30, 50), random(asteroidsImg)));
      asteroids.push(new Asteroid(createVector(0, 0), random(30, 50), random(asteroidsImg)));
      asteroids.push(new Asteroid(createVector(0, 0), random(30, 50), random(asteroidsImg)));
      moreval += 3;
    }
  }

  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } else {
      for (let j = asteroids.length - 1; j >= 0; j--) {
        if (lasers[i].hits(asteroids[j])) {
          boomSound.setVolume(0.35);
          boomSound.play();
          pointsval++;
          if (asteroids[j].r > 30) {
            let newAsteroids = asteroids[j].breakup();
            asteroids = asteroids.concat(newAsteroids);
          }
          asteroids.splice(j, 1);
          lasers.splice(i, 1);
          break;
        }
      }
    }
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}

function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    laserSound.setVolume(0.5);
    laserSound.play();
    lasers.push(new Laser(ship.pos, ship.head));
  } else if (keyCode == RIGHT_ARROW || keyCode == 68) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW || keyCode == 65) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW || keyCode == 87) {
    ship.boosting(true);
  }
}
