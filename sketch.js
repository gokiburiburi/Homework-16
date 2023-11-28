let myBuildingone;

function setup() {
  createCanvas(600, 400);
  myBuildingone = new buildingone(width / 2, height / 2, 100);
}

function draw() {
  background(119,136,153);
  myBuildingone.display();
}

function keyReleased() {
  myBuildingone.move();
}

class buildingone {
  constructor(xpos, ypos, size) {
  }

  display() {
    fill(255, 239, 213)
    ellipse(395, 240, 100, 100);
    fill(85,107,47)
    ellipse(100,400,600,300)
    //building
    fill(60);
    rect(30, 100, 100, 500);
    fill(60);
    rect(40, 50, 10, 50);
    fill(255, 0, 0);
    rect(40, 50, 10, 10);
    //windows
    fill(255, 239, 213);
    rect(40, 230, 20, 20); rect(100, 280, 20, 20); rect(40, 140, 20, 20); rect(100, 180, 20, 20);
    //field
    fill(132,95,65);
    rect(390,220, 8, 40);
    fill(49,78,50)
    ellipse(398,219, 20, 10);
    ellipse(390,220, 20, 9);
    ellipse(398,225, 25, 9);
    fill(85,107,47);
    ellipse(400,420,550,350);
    fill(85,107,47);
    ellipse(200,500,400,350);
    fill(85,107,47);
    ellipse(40,500,400,350);
    fill(85,107,47);
    ellipse(500,500,600,350);
  }

  move() {
    this.xpos++;
  }
}
