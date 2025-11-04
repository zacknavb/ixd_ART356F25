let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;

let data1;
let data2;
let data3;
let data4;
let data5;
let data6;
let data7;
let data8;
let data9;
let data10;
let data11;
let data12;

var scene0 = true;
var scene1 = false;
var scene2 = false;
var scene3 = false;
var scene4 = false;
var scene5 = false;
var scene6 = false;
var scene7 = false;
var scene8 = false;
var scene9 = false;
var scene10 = false;
var scene11 = false;
var scene12 = false;

let headfont;

let bgm1;
let bgm2;
let bgm3;
let bgm4;
let bgm5;
let bgm6;
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let click;
let flip;
let swap;

let song;
let songname;
let isPaused = false;

function preload() {
  data1 = loadJSON("barbarian.json");
  data2 = loadJSON("bard.json");
  data3 = loadJSON("cleric.json");
  data4 = loadJSON("druid.json");
  data5 = loadJSON("fighter.json");
  data6 = loadJSON("monk.json");
  data7 = loadJSON("paladin.json");
  data8 = loadJSON("ranger.json");
  data9 = loadJSON("rogue.json");
  data10 = loadJSON("sorcerer.json");
  data11 = loadJSON("warlock.json");
  data12 = loadJSON("wizard.json");

  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
  img4 = loadImage('4.png');
  img5 = loadImage('5.png');
  img6 = loadImage('6.png');
  img7 = loadImage('7.png');
  img8 = loadImage('8.png');
  img9 = loadImage('9.png');
  img10 = loadImage('10.png');
  img11 = loadImage('11.png');
  img12 = loadImage('12.png');
  bg = loadImage('background.avif');

  bgm1 = loadSound('sounds/8-bit_Tavern.mp3');
  bgm2 = loadSound('sounds/Adventure_Beyond.mp3');
  bgm3 = loadSound('sounds/Anemo.mp3');
  bgm4 = loadSound('sounds/Adventure.mp3');
  bgm5 = loadSound('sounds/Afterlife.mp3');
  bgm6 = loadSound('sounds/Ambient_Motivational.mp3');
  click = loadSound('sounds/click.mp3');
  flip = loadSound('sounds/flip.mp3');
  swap = loadSound('sounds/switch.mp3');

  headfont = loadFont('LobsterTwo-Bold.otf')
}

function setup() {
  let myCanvas = createCanvas(1400, 900);
  myCanvas.parent("specialDiv");
  s1 = '8-bit Tavern - Alexander Nakarada';
  s2 = 'Adventure Beyond - Alexander Nakarada';
  s3 = 'Anemo - Alexander Nakarada';
  s4 = 'Adventure - Alexander Nakarada';
  s5 = 'Afterlife - Alexander Nakarada';
  s6 = 'Ambient Motivational - Alexander Nakarada';

  songname = s1;
  song = bgm1;
  song.play();
}

function draw() {
  if (scene0 == true) {
    background(38, 36, 31);
    buttons();
  } else if (scene1 == true) {
    background(38, 36, 31);
    data1info();
  } else if (scene2 == true) {
    background(38, 36, 31);
    data2info();
  } else if (scene3 == true) {
    background(38, 36, 31);
    data3info();
  } else if (scene4 == true) {
    background(38, 36, 31);
    data4info();
  } else if (scene5 == true) {
    background(38, 36, 31);
    data5info();
  } else if (scene6 == true) {
    background(38, 36, 31);
    data6info();
  } else if (scene7 == true) {
    background(38, 36, 31);
    data7info();
  } else if (scene8 == true) {
    background(38, 36, 31);
    data8info();
  } else if (scene9 == true) {
    background(38, 36, 31);
    data9info();
  } else if (scene10 == true) {
    background(38, 36, 31);
    data10info();
  } else if (scene11 == true) {
    background(38, 36, 31);
    data11info();
  } else if (scene12 == true) {
    background(38, 36, 31);
    data12info();
  }

  if (scene0 === false) {
    strokeWeight(0);
    fill(168, 89, 52);
    text('X Press escape to return', 140, 35);
  }

  rectMode(CENTER);
  noFill();
  strokeWeight(20);
  stroke(20, 19, 18);
  rect(width / 2, height / 2, width, height, 14);
  textFont(headfont);
  fill(179, 158, 102);
  strokeWeight(0);
  textSize(20);
  text('Current Song Playing: ' + songname + '...', width / 2, height - 25);
}

function mouseClicked() {
  if (scene0 == true) {
    if (mouseX > width - 1200 - 75 && mouseX < width - 1200 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
      click.play();
      scene1 = true;
      scene0 = false;
    }

    if (mouseX > width - 1200 - 75 && mouseX < width - 1200 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
      click.play();
      scene2 = true;
      scene0 = false;
    }

    if (mouseX > width - 1000 - 75 && mouseX < width - 1000 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
      click.play();
      scene3 = true;
      scene0 = false;
    }

    if (mouseX > width - 1000 - 75 && mouseX < width - 1000 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
      click.play();
      scene4 = true;
      scene0 = false;
    }

    if (mouseX > width - 800 - 75 && mouseX < width - 800 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
      click.play();
      scene5 = true;
      scene0 = false;
    }

    if (mouseX > width - 800 - 75 && mouseX < width - 800 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
      click.play();
      scene6 = true;
      scene0 = false;
    }

    if (mouseX > width - 600 - 75 && mouseX < width - 600 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
      click.play();
      scene7 = true;
      scene0 = false;
    }

    if (mouseX > width - 600 - 75 && mouseX < width - 600 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
      click.play();
      scene8 = true;
      scene0 = false;
    }

    if (mouseX > width - 400 - 75 && mouseX < width - 400 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
      click.play();
      scene9 = true;
      scene0 = false;
    }

    if (mouseX > width - 400 - 75 && mouseX < width - 400 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
      click.play();
      scene10 = true;
      scene0 = false;
    }

    if (mouseX > width - 200 - 75 && mouseX < width - 200 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
      click.play();
      scene11 = true;
      scene0 = false;
    }

    if (mouseX > width - 200 - 75 && mouseX < width - 200 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
      click.play();
      scene12 = true;
      scene0 = false;
    }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    if (scene0 === false) {
      flip.play();
      scene0 = true;
      scene1 = false;
      scene2 = false;
      scene3 = false;
      scene4 = false;
      scene5 = false;
      scene6 = false;
      scene7 = false;
      scene8 = false;
      scene9 = false;
      scene10 = false;
      scene11 = false;
      scene12 = false;
    }

  }
  if (keyCode === LEFT_ARROW) {
    if (songname == s1 && song == bgm1) {
      song.stop();
      songname = s6;
      song = bgm6;
      song.play();
    }
    else if (songname == s2 && song == bgm2) {
      song.stop();
      songname = s1;
      song = bgm1;
      song.play();
    }
    else if (songname == s3 && song == bgm3) {
      song.stop();
      songname = s2;
      song = bgm2;
      song.play();
    }
    else if (songname == s4 && song == bgm4) {
      song.stop();
      songname = s3;
      song = bgm3;
      song.play();
    }
    else if (songname == s5 && song == bgm5) {
      song.stop();
      songname = s4;
      song = bgm4;
      song.play();
    }
    else if (songname == s6 && song == bgm6) {
      song.stop();
      songname = s5;
      song = bgm5;
      song.play();
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (songname == s1 && song == bgm1) {
      song.stop();
      songname = s2;
      song = bgm2;
      song.play();
    }
    else if (songname == s2 && song == bgm2) {
      song.stop();
      songname = s3;
      song = bgm3;
      song.play();
    }
    else if (songname == s3 && song == bgm3) {
      song.stop();
      songname = s4;
      song = bgm4;
      song.play();
    }
    else if (songname == s4 && song == bgm4) {
      song.stop();
      songname = s5;
      song = bgm5;
      song.play();
    }
    else if (songname == s5 && song == bgm5) {
      song.stop();
      songname = s6;
      song = bgm6;
      song.play();
    }
    else if (songname == s6 && song == bgm6) {
      song.stop();
      songname = s1;
      song = bgm1;
      song.play();
    }
  }
  if (keyCode === 32) {
    if (isPaused === true) {
      song.play();
      isPaused = false;
    } else {
      song.pause();
      isPaused = true;
    }
  }
}
