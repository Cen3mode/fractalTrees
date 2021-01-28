var angle = 0;
var stop = 0;

var angleSlider;
var stopSlider;

function setup() {
  createCanvas(400, 400);
  angleSlider = createSlider(0, TWO_PI, PI/4, 0.01);
  stopSlider = createSlider(1, 20, 2, 0.01);
}


function draw() {
  background(0);
  stroke(255);
  translate(200, height);

  angle = angleSlider.value();
  stop = stopSlider.value();

  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len >stop) {
    push();
    rotate(angle);
    branch(len * 0.65);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.65);
    pop();
  }
}
