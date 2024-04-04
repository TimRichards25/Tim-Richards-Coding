// const density = 'Ñ@W#80$965432ba1?c7=!+;_-,:. ';
// const density = '!"#$%&()*+,-.0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const density =
  '                        `````````.....-:_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&&&&@@@@@@@@';
let vid;
let vidSizeMult = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vid = createCapture(VIDEO);
  // vid.hide();
  vid.size(16 * vidSizeMult, 9 * vidSizeMult);
  // vid.position(-16 * vidSizeMult, 0);
  // scale(-1, 1);
  // vid.scale(, 1);
  vid.hide();
}

function draw() {
  background(0);

  let w = width / vid.width;
  let h = height / vid.height;

  pixelDensity(1);
  vid.loadPixels();

  for (let j = 0; j < vid.height; j += 1) {
    for (let i = vid.width - 1; i >= 0; i -= 1) {
      const pixelIndex = (i + j * vid.width) * 4;
      const r = vid.pixels[pixelIndex + 0];
      const g = vid.pixels[pixelIndex + 1];
      const b = vid.pixels[pixelIndex + 2];
      const avg = (r + b + g) / 3;

      strokeWeight(1);
      // stroke(0, 50, 0);
      fill(255);
      // noFill();
      // square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));

      textStyle(BOLD);
      textFont('Roboto Mono');
      textSize(w * 1);
      textWidth(200);

      textAlign(CENTER);
      // text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.75);
      text(density.charAt(charIndex), width - i * w - w * 0.5, j * h + h * 0.75);
    }
  }
}
