function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  clear();
  create();
}

function create() {
  background(0);
  noFill();

  let phase = 0;
  let zoff = 0;  
  for (let i = 0; i < 500; i++) {
    const g = 255;
    const b = 255;
    const a = 10;
    const noiseMax = 0.8;
  
    let radius = 70 + 1 * i;

    zoff += 0.001;
    phase += 0.008;

    stroke(map(i, 0, 100, 0, 255), g, b, a);

    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(3)) {
      let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      let r = noise(xoff, yoff, zoff);
      let x = width / 2 + r * radius * cos(a);
      let y = height / 2 + r * radius * sin(a);
      vertex(x + i, y);
    }
    endShape(CLOSE);

    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(3)) {
      let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      let r = noise(xoff, yoff, zoff);
      let x = width / 2 + r * radius * cos(a);
      let y = height / 2 + r * radius * sin(a);
      vertex(x - i, y);
    }
    endShape(CLOSE);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener("click", create);
