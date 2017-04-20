function setup() {
  createCanvas(1400, 800);

}

function draw() {
  fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  stroke(255, 255, 255, 25);

  rect(mouseX, mouseY, 80, 80);
}
