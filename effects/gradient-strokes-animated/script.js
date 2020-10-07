function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function drawShape(counter, radius, phase, noiseBounds, zoff, backwards) {
  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(3)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseBounds);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseBounds);
    let r = noise(xoff, yoff, zoff);
    let x = width / 2 + r * radius * cos(a);
    let y = height / 2 + r * radius * sin(a);
    if (backwards) {
      vertex(x - counter, y);
    } else {
      vertex(x + counter, y);
    }
  }
  endShape(CLOSE);
}

function draw() {
  background(0);
  noFill();

  const g = random(0, 255);
  const b = random(0, 255);
  const a = 10;
  const noiseBounds = 0.8;

  let phase = 0;
  let zoff = 0;
  for (let i = 0; i < 500; i++) {
    zoff += 0.001;
    phase += 0.008;

    let radius = 70 + 1 * i;
    stroke(map(i, 0, 100, 0, 255), g, b, a);
    drawShape(i, radius, phase, zoff, noiseBounds);
    drawShape(i, radius, phase, zoff, noiseBounds, true);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}