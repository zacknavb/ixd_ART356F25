let cloth1;
let cloth2;
let cloth3;

let head1;
let head2;
let head3;

let face1;
let face2;
let face3;

let bg1;
let bg2;
let bg3;
let bg4;
let bg5;

let tint1;
let tint2;
let tint3;
let tint4;
let tint5;

let body;

let cloth_id;
let head_id;
let face_id;
let bg_id;
let tint_id;

let tintc;

function preload() {
  //ver1
  cloth1 = loadImage("cloth1.png");
  head1 = loadImage("head1.png");
  face1 = loadImage("face1.png");
  //ver2
  cloth2 = loadImage("cloth2.png");
  head2 = loadImage("head2.png");
  face2 = loadImage("face2.png");
  //ver3
  cloth3 = loadImage("cloth3.png");
  head3 = loadImage("head3.png");
  face3 = loadImage("face3.png");

  bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");
  bg3 = loadImage("bg3.png");
  bg4 = loadImage("bg4.png");
  bg5 = loadImage("bg5.png");

  body = loadImage("body.png");

  cloth_id = int(random(1, 4));
  head_id = int(random(1, 4));
  face_id = int(random(1, 4));
  bg_id = int(random(1,6));
  tint_id = int(random(1,6));

  tint1 = '#e5caba';
  tint2 = '#e1b696';
  tint3 = '#cfb18a';
  tint4 = '#896454';
  tint5 = '#63483d';

}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  textSize(18);
  fill("black");
  text("Press 1 to change clothes, 2 to change eyes,", 0, 30);
  text("and 3 to change mouth.", 0, 50);
  imageMode(CENTER);

  if (bg_id == 1) {
    image(bg1, 400, 400, 800, 800);
  } else if (bg_id == 2) {
    image(bg2, 400, 400, 800, 800);
  } else if (bg_id == 3) {
    image(bg3, 400, 400, 800, 800);
  } else if (bg_id == 4) {
    image(bg4, 400, 400, 800, 800);
  } else if (bg_id == 5) {
    image(bg5, 400, 400, 800, 800);
  }

  if (tint_id == 1) {
    tintc = tint1;
  } else if (tint_id == 2) {
    tintc = tint2;
  } else if (tint_id == 3) {
    tintc = tint3;
  } else if (tint_id == 4) {
    tintc = tint4;
  } else if (tint_id == 5) {
    tintc = tint5;
  }

  tint(tintc);
  image(body, 400, 400, 800, 800);
  noTint();

  if (face_id == 1) {
    image(face1, 400, 400, 800, 800);
  } else if (face_id == 2) {
    image(face2, 400, 400, 800, 800);
  } else if (face_id == 3) {
    image(face3, 400, 400, 800, 800);
  }

  if (head_id == 1) {
    image(head1, 400, 400, 800, 800);
  } else if (head_id == 2) {
    image(head2, 400, 400, 800, 800);
  } else if (head_id == 3) {
    image(head3, 400, 400, 800, 800);
  }

  if (cloth_id == 1) {
    image(cloth1, 400, 400, 800, 800);
  } else if (cloth_id == 2) {
    image(cloth2, 400, 400, 800, 800);
  } else if (cloth_id == 3) {
    image(cloth3, 400, 400, 800, 800);
  }
}
function keyTyped() {
  if (keyCode === 82) {
    changeBg();
  }
  if (keyCode === 81) {
    changeCloth();
  }
  if (keyCode === 87) {
    changeHead();
  }
  if (keyCode === 69) {
    changeFace();
  }
  if (keyCode === 68) {
    changeTint();
  }
  if (keyCode === 70) {
    changeRandom();
  }
}
function mouseClicked() {
  saveCanvas('creation.png');
}
function changeCloth() {
  if (cloth_id == 1) {
    cloth_id = 2;
  } else if (cloth_id == 2) {
    cloth_id = 3;
  } else if (cloth_id == 3) {
    cloth_id = 1;
  }
}
function changeHead() {
  if (head_id == 1) {
    head_id = 2;
  } else if (head_id == 2) {
    head_id = 3;
  } else if (head_id == 3) {
    head_id = 1;
  }
}
function changeFace() {
  if (face_id == 1) {
    face_id = 2;
  } else if (face_id == 2) {
    face_id = 3;
  } else if (face_id == 3) {
    face_id = 1;
  }
}
function changeBg() {
  if (bg_id == 1) {
    bg_id = 2;
  } else if (bg_id == 2) {
    bg_id = 3;
  } else if (bg_id == 3) {
    bg_id = 4;
  } else if (bg_id == 4) {
    bg_id = 5;
  }else if (bg_id == 5) {
    bg_id = 1;
  }
}
function changeTint() {
  if (tint_id == 1) {
    tint_id = 2;
  } else if (tint_id == 2) {
    tint_id = 3;
  } else if (tint_id == 3) {
    tint_id = 4;
  } else if (tint_id == 4) {
    tint_id = 5;
  }else if (tint_id == 5) {
    tint_id = 1;
  }
}
function changeRandom() {
  cloth_id = int(random(1, 4));
  head_id = int(random(1, 4));
  face_id = int(random(1, 4));
  bg_id = int(random(1,6));
  tint_id = int(random(1,6));
}