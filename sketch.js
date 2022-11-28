let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(900, 700);
  video.hide();
  background(255);
  noCursor();
}

function draw() {
  imageMode(CENTER);
  let scan = video.get(video.width / 2, 0, 1, 480);
  translate(width / 2, height / 2);
  
  //image(img, x, y, [width], [height])
  //5-5
  push();
  rotate(frameCount * 0.001);
  //tint(255,150);
  image(scan, 0, height / 12 * 11, 1, height / 3);
  pop();
  
  //5-4
  push();
  rotate(frameCount * 0.001);
  //tint(255,120);
  image(scan, 0, -height / 12 * 7.5, 1, height / 4);
  pop();
  
  //5-3
  push();
  rotate(frameCount * 0.001);
  tint(255,140);
  image(scan, 0, height / 12 * 5, 1, height / 6);
  pop();
  
  //5-2
  push();
  rotate(frameCount * 0.001);
  tint(255,130);
  image(scan, 0, -height / 12 * 3, 1, height / 6);
  pop();
  
  //5-1
  push();
  rotate(frameCount * 0.001);
  tint(255,150);
  image(scan, 0, height / 12, 1, height / 6);
  pop();
  
  
  //테두리 선
  noFill();
  stroke(127);
  strokeWeight(0.5);
  circle(0, 0, height*1.5);
  circle(0, 0, height);
  circle(0, 0, height/3*2);
  circle(0, 0, height/3);
}


function keyReleased() {
  if (key == 's') saveCanvas();
  if (keyCode == DELETE || keyCode == BACKSPACE) clear();
  if (key == 'q') noLoop();
  if (key == 'w') loop();
}