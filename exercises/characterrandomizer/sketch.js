let cloth1;
let cloth2;
let cloth3;
let eye1;
let eye2;
let eye3;
let mouth1;
let mouth2;
let mouth3;

let cloth_id;
let eye_id;
let mouth_id;

let bgColor1;
let bgColor2;

function preload() {
  //ver1
  cloth1 = loadImage("tshirt1.png");
  eye1 = loadImage("eye1.png");
  mouth1 = loadImage("mouth1.png");
  //ver2
  cloth2 = loadImage("buttonshirt1.png");
  eye2 = loadImage("eye2.png");
  mouth2 = loadImage("mouth2.png");
  //ver3
  cloth3 = loadImage("hoodie1.png");
  eye3 = loadImage("eye3.png");
  mouth3 = loadImage("mouth3.png");
}
function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  textSize(18);
  fill("black");
  text("Press 1 to change clothes, 2 to change eyes,", 0, 30);
  text("and 3 to change mouth.", 0, 50);

  if (cloth_id == 1) {
    image(cloth1, 0, 300, 520, 500);
  } else if (cloth_id == 2) {
    image(cloth2, 0, 300, 520, 500);
  } else if (cloth_id == 3) {
    image(cloth3, 0, 200, 520, 500);
  }

  if (keyIsDown(49) === true) {
    changeCloth();
  }

  fill("white");
  ellipse(250, 250, 250, 250);

  if (eye_id == 1) {
    image(eye1, 220, 200, 50, 50);
  } else if (eye_id == 2) {
    image(eye2, 220, 200, 50, 50);
  } else if (eye_id == 3) {
    image(eye3, 220, 200, 50, 50);
  }

  if (keyIsDown(50) === true) {
    changeEye();
  }

  if (mouth_id == 1) {
    image(mouth1, 220, 300, 50, 50);
  } else if (mouth_id == 2) {
    image(mouth2, 220, 300, 50, 50);
  } else if (mouth_id == 3) {
    image(mouth3, 220, 300, 50, 50);
  }

  if (keyIsDown(51) === true) {
    changeMouth();
  }
}
function changeCloth() {
  cloth_id = int(random(1, 4));
}
function changeEye() {
  eye_id = int(random(1, 4));
}
function changeMouth() {
  mouth_id = int(random(1, 4));
}
