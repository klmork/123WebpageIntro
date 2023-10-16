let x = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x, 200, 50);
  x = x + 1;
  if (x > width / 2) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("h1").style.color = "red";
  }
}
