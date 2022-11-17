function setup() {
  createCanvas(windowWidth, windowHeight);
  document.body.style.background = '#36393F';
  
  button1 = new Button('../blob-text', 'Inky Text');
  button2 = new Button('../boat-game', 'Plane Flight');
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  button1.hover();
  button2.hover();
}
function mousePressed() {
  button1.click();
  button2.click();
}

function draw() {
  background('#36393F');
  textAlign(CENTER, CENTER);
  fill('#DCD8D9');
  textSize(80);
  let x = width/2;
  let y = 100;
  let a = atan2(mouseY-y, mouseX-x);
  let d = sqrt(sq(mouseX-x) + sq(mouseY-y))/10;
  x += cos(a) * d;
  y += sin(a) * d;
  text("Peter's SHAD Website", x, y);
  
  button1.draw(width/2, height/2);
  button2.draw(width/2, height/2+80);
}

class Button {
  constructor(_link, _text) {
    this.link = _link;
    this.text = _text;
    this.margin = 10;
    this.hovered = false;
    textSize(30);
    this.textWidth = textWidth(this.text);
  }
  draw(x, y) {
    this.x = x;
    this.y = y;
    textAlign(CENTER, CENTER);
    textSize(30);
    rectMode(CENTER);
    fill('#4752C4');
    noStroke();
    let target = this.hovered? 20: 10;
    this.margin += (target - this.margin) * 0.1;
    rect(x, y, this.textWidth+this.margin, 30+this.margin, this.margin);
    fill('#DCD8D9');
    text(this.text, x, y);
  }
  hover() {
    this.hovered = abs(mouseX-this.x) < (this.textWidth+this.margin)/2 && abs(mouseY-this.y) < (30+this.margin)/2;
  }
  click() {
    if(this.hovered) {
      location.href = this.link;
    }
    console.log(link);
  }
}