let bg;
let gamefont, titlefont;

//UI
let banner, btn, crsr, muson, musoff;
let bw1, bh2, musw, mush, muscheck;

let timer = 300;
let score = 0;

//sounds
let phit, ehit, swatt, hover, conf, cancel, click;
let sfxv;
//music
let titlem, w1m, win, lose, song;
var bgmv = 0.4;
//attack timer
let atime = 0;
let cd = 3000;
let ahitbox;
let ahitboxspawned = false;
let ahitboxX;

//monster timer
///orcs
let orcd;
let orcs;
let otime = 0;
let ocd = 5000;
///orcriders
let rorcd;
let rorcs;
let rotime = 0;
let rocd = 5000;
///armoredorcs
let aorcs;
let aotime = 0;
let aocd = 15000;
///eliteorcs
let eorcs;
let eotime = 0;
let eocd = 30000;

let player, exps;
let twall, bwall, lwall, rwall;
let speed, dmg, ospeed;
let knock, expc, level;
let sword;

let faceR;
faceR = true;

let scene = 0;

function preload() {
  //SFX
  phit = loadSound('assets/sfx/phit.wav');
  ehit = loadSound('assets/sfx/ehit.wav');
  swatt = loadSound('assets/sfx/swatt.wav');
  hover = loadSound('assets/sfx/hover.mp3');
  conf = loadSound('assets/sfx/confirm.wav');
  cancel = loadSound('assets/sfx/cancel.wav');
  click = loadSound('assets/sfx/click.mp3');

  swatt.setVolume(0.5);

  //Music
  titlm = loadSound('assets/music/title.wav');
  w1m = loadSound('assets/music/world1.wav');
  win = loadSound('assets/music/win.wav');
  lose = loadSound('assets/music/lose.wav');

  song = titlm;

  //UI
  banner = loadImage("assets/ui/banner.png");
  btn = loadImage("assets/ui/btn.png");
  crsr = loadImage("assets/ui/cursor.png");
  muson = loadImage("assets/ui/muson.png");
  musoff = loadImage("assets/ui/musoff.png");

  muscheck = muson;
  musw = 50;
  mush = 50;
}
function setup() {
  createCanvas(1000, 600);
  gamefont = loadFont("Darinia.ttf");
  titlefont = loadFont("Anxel.ttf");
  song.loop();
  pixelDensity(10);

  switch (scene) {
    case 0: {
      bg = loadImage("assets/bgs/4.png");

      twall = new Sprite(width / 2, -181, width, 1, 'static');
      bwall = new Sprite(width / 2, height + 181, width, 1, 'static');
      lwall = new Sprite(-181, height / 2, 1, height, 'static');
      rwall = new Sprite(width + 181, height / 2, 1, height, 'static');

      //Player
      player = new Sprite(width / 2, height / 2, 50, 50);
      player.anis.frameDelay = 8;
      player.addAnis("assets/player/swordsman/sword.png", {
        idle: { row: 0, frames: 6 },
        walk: { row: 1, frames: 8 },
        attack: { row: 2, frames: 7, frameDelay: 4 },
        death: { row: 7, frames: 4, frameDelay: 2 }
      });
      player.changeAni('idle');
      player.scale = 2;
      player.x = -300;
      player.rotationLock = true;
      //Player Stats
      speed = 2;
      dmg = 10;
      knock = 50;
      expc = 0;
      level = 1;

      //Exp
      exps = new Group();
      exps.anis.frameDelay = 3;
      exps.addAni("assets/player/exp.png", { width: 16, height: 16, frames: 4 });
      exps.scale = 1.5;
      exps.overlaps(allSprites);

      //Orcs
      orcs = new Group();
      orcs.anis.frameDelay = 8;
      orcs.addAni("assets/enemies/orcw.png", { width: 100, height: 100, frames: 6 });
      orcs.scale = 2;
      orcs.rotationLock = true;
      orcs.overlaps(twall);
      orcs.overlaps(bwall);
      orcs.overlaps(rwall);
      orcs.overlaps(lwall);
      orcs.overlaps(player);
      orcs.overlaps(allSprites);
      orcs.speed = 1;
      orcs.hp = 10;
      //Orc Riders
      rorcs = new Group();
      rorcs.anis.frameDelay = 8;
      rorcs.addAni("assets/enemies/rorcw.png", { width: 100, height: 100, frames: 8 });
      rorcs.scale = 2;
      rorcs.rotationLock = true;
      rorcs.overlaps(twall);
      rorcs.overlaps(bwall);
      rorcs.overlaps(rwall);
      rorcs.overlaps(lwall);
      rorcs.overlaps(player);
      rorcs.overlaps(allSprites);
      rorcs.speed = 1;
      rorcs.hp = 10;
      //Armored Orcs
      aorcs = new Group();
      aorcs.anis.frameDelay = 8;
      aorcs.addAni("assets/enemies/aorcw.png", { width: 100, height: 100, frames: 8 });
      aorcs.scale = 2.3;
      aorcs.rotationLock = true;
      aorcs.overlaps(twall);
      aorcs.overlaps(bwall);
      aorcs.overlaps(rwall);
      aorcs.overlaps(lwall);
      aorcs.overlaps(player);
      aorcs.overlaps(allSprites);
      aorcs.speed = 1;
      aorcs.hp = 20;
      //Elite Orcs
      eorcs = new Group();
      eorcs.anis.frameDelay = 8;
      eorcs.addAni("assets/enemies/eorcw.png", {
        width: 100, height: 100, frames: 8
      });
      eorcs.scale = 2.5;
      eorcs.rotationLock = true;
      eorcs.overlaps(twall);
      eorcs.overlaps(bwall);
      eorcs.overlaps(rwall);
      eorcs.overlaps(lwall);
      eorcs.overlaps(player);
      eorcs.overlaps(allSprites);
      eorcs.speed = 1;
      eorcs.hp = 30;
    } break;
  }
}

function draw() {
  clear();
  soundV();
  switch (scene) {
    case 0: {
      //UI
      imageMode(CORNER);
      background(bg);
      imageMode(CENTER);
      image(banner, width / 2, 115, 600, 200);
      textAlign(CENTER);
      textFont(gamefont);
      textSize(25);
      fill(48, 45, 38);
      stroke(31, 22, 14);
      strokeWeight(2);
      text("Records of", width / 2, 70);
      textSize(40);
      text("the Drakith War", width / 2 - 10, 110);

      ///Buttons
      stroke(31, 22, 14);
      fill(184, 121, 66);
      textSize(50);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      //image(btn, width / 2, 250, 280, 80, 5);
      rect(width / 2, 250, 280, 80, 5);
      if (mouseX >= width / 2 - 140 && mouseX <= width / 2 + 140 && mouseY >= 250 - 40 && mouseY <= 250 + 40) {
        fill(217, 208, 132);
      }
      else {
        fill(250, 233, 185);
      }
      text("PLAY", width / 2 - 5, 265);

      fill(184, 121, 66);
      //image(btn, width / 2, 390, 280, 80, 5);
      rect(width / 2, 390, 280, 80, 5);
      fill(250, 233, 185);
      text("SETTINGS", width / 2 - 5, 405);

      ///Music
      imageMode(CENTER);
      if (mouseX >= width - 55 && mouseX <= width - 5 && mouseY >= height - 55 && mouseY <= height - 5) {
        musw = 60;
        mush = 60;
      } else {
        musw = 50;
        mush = 50;
      }
      image(muscheck, width - 30, height - 30, musw, mush);


      ///Cursor
      imageMode(CORNER);
      noCursor();
      image(crsr, mouseX, mouseY, 30, 34);
    } break;
    case 1: {
      background(116, 122, 118);
      rectMode(CENTER);
      if (kb.presses('1')) {
        allSprites.debug = true;
      }
      if (kb.presses('2')) {
        allSprites.debug = false;
      }
      player.h = 30;
      player.w = 30;
      //Player animation
      if (kb.presses('d')) {
        faceR = true;
      } else if (kb.presses('a')) {
        faceR = false;
      }
      if (faceR == true) {
        player.scale.x = 2;
      }
      else {
        player.scale.x = -2;
      }
      if (player.ani.name != 'attack') {
        if (kb.pressing('w')) {
          player.changeAni('walk');
        } else if (kb.pressing('a')) {
          player.changeAni('walk');
        } else if (kb.pressing('s')) {
          player.changeAni('walk');
        } else if (kb.pressing('d')) {
          player.changeAni('walk');
        } else if (player.ani.name != 'idle') {
          player.changeAni('idle');
        }
      }
      //Attack
      let cdtime = millis();

      if (cdtime - atime >= cd) {
        player.changeAni(['attack', 'idle']);
        swatt.play();
        atime = cdtime;
        ahitboxspawned = false;
      }
      if (player.ani.name == 'attack' && !ahitboxspawned) {
        if (faceR == true) {
          ahitboxX = 50;
        } else if (faceR == false) {
          ahitboxX = -50;
        }
        ahitbox = new Sprite(player.x + ahitboxX, player.y, 100, 100);
        ahitbox.image = 'assets/invis.png';
        ahitbox.life = 25;

        ahitbox.overlaps(player);
        ahitbox.overlaps(orcs);
        ahitbox.overlaps(aorcs);
        ahitbox.rotationLock = true;
        ahitboxspawned = true;
      }
      //MonsterSpawn

      ///////Orcs
      let ocdtime = millis();

      if (ocdtime - otime >= ocd) {
        new orcs.Sprite(-10, random(height), 50, 50);
        new orcs.Sprite(width + 10, random(height), 50, 50);
        if (timer <= 280) {
          new orcs.Sprite(-10, random(height), 50, 50);
          new orcs.Sprite(width + 10, random(height), 50, 50);
        }
        otime = ocdtime;
      }
      orcs.w = 30;
      orcs.h = 30;
      for (let i = 0; i < orcs.length; i++) {
        let orc = orcs[i];
        orc.moveTo(player.x, player.y, 0.5);
        if (orc.x >= player.x) {
          orc.scale.x = -2;
        } else if (orc.x <= player.x) {
          orc.scale.x = 2;
        }
        if (ahitbox.overlap(orc)) {
          ehit.play();
          orc.hp -= dmg;
          if (orc.x >= player.x) {
            orc.x += knock;
          } else if (orc.x <= player.x) {
            orc.x -= knock;
          }
        }
        if (orc.hp <= 0) {
          score += 1;
          new exps.Sprite(orc.x, orc.y, 0.6);
          orc.remove();
        }
        if (keyIsDown(65) || keyIsDown(97)) { // 'A' or 'a'
          orc.x += speed;
        }
        if (keyIsDown(68) || keyIsDown(100)) { // 'D' or 'd'
          orc.x -= speed;
        }
        if (keyIsDown(87) || keyIsDown(119)) { // 'W' or 'w'
          orc.y += speed;
        }

        if (keyIsDown(83) || keyIsDown(115)) { // 'S' or 's'
          orc.y -= speed;
        }
        if (orc.overlaps(twall)) {
          orc.y = height + 10;
        }
        if (orc.overlaps(bwall)) {
          orc.y = -10;
        }
        if (orc.overlaps(lwall)) {
          orc.x = width + 10;
        }
        if (orc.overlaps(rwall)) {
          orc.x = -10;
        }
      }
      ///////Orc Riders
      let rocdtime = millis();

      if (timer <= 280) {
        if (rocdtime - rotime >= rocd) {
          new rorcs.Sprite(width + 10, random(height), 50, 50);
          rotime = rocdtime;
        }
        rorcs.w = 50;
        rorcs.h = 55;
        for (let i = 0; i < rorcs.length; i++) {
          let rorc = rorcs[i];
          rorc.moveTo(player.x, player.y, 0.9);
          if (rorc.x >= player.x) {
            rorc.scale.x = -2;
          } else if (rorc.x <= player.x) {
            rorc.scale.x = 2;
          }
          if (ahitbox.overlap(rorc)) {
            ehit.play();
            rorc.hp -= dmg;
            if (rorc.x >= player.x) {
              rorc.x += knock;
            } else if (rorc.x <= player.x) {
              rorc.x -= knock;
            }
          }
          if (rorc.hp <= 0) {
            score += 1;
            new exps.Sprite(rorc.x, rorc.y, 0.6);
            rorc.remove();
          }
          if (keyIsDown(65) || keyIsDown(97)) { // 'A' or 'a'
            rorc.x += speed;
          }
          if (keyIsDown(68) || keyIsDown(100)) { // 'D' or 'd'
            rorc.x -= speed;
          }
          if (keyIsDown(87) || keyIsDown(119)) { // 'W' or 'w'
            rorc.y += speed;
          }

          if (keyIsDown(83) || keyIsDown(115)) { // 'S' or 's'
            rorc.y -= speed;
          }
          if (rorc.overlaps(twall)) {
            rorc.y = height + 10;
          }
          if (rorc.overlaps(bwall)) {
            rorc.y = -10;
          }
          if (rorc.overlaps(lwall)) {
            rorc.x = width + 10;
          }
          if (rorc.overlaps(rwall)) {
            rorc.x = -10;
          }
        }
      }
      ///////Armored Orcs
      let aocdtime = millis();
      if (timer <= 270) {
        if (aocdtime - aotime >= aocd) {
          new aorcs.Sprite(-10, random(height), 50, 50);
          new aorcs.Sprite(width + 10, random(height), 50, 50);
          aotime = aocdtime;
        }
        aorcs.w = 40;
        aorcs.h = 40;
        for (let i = 0; i < aorcs.length; i++) {
          let aorc = aorcs[i];
          aorc.moveTo(player.x, player.y, 0.4);
          if (aorc.x >= player.x) {
            aorc.scale.x = -2.3;
          } else if (aorc.x <= player.x) {
            aorc.scale.x = 2.3;
          }
          if (ahitbox.overlap(aorc)) {
            ehit.play();
            aorc.hp -= dmg;
            if (aorc.x >= player.x) {
              aorc.x += knock;
            } else if (aorc.x <= player.x) {
              aorc.x -= knock;
            }
          }
          if (aorc.hp <= 0) {
            score += 1;
            new exps.Sprite(aorc.x, aorc.y, 0.6);
            aorc.remove();
          }
          if (keyIsDown(65) || keyIsDown(97)) { // 'A' or 'a'
            aorc.x += speed;
          }
          if (keyIsDown(68) || keyIsDown(100)) { // 'D' or 'd'
            aorc.x -= speed;
          }
          if (keyIsDown(87) || keyIsDown(119)) { // 'W' or 'w'
            aorc.y += speed;
          }

          if (keyIsDown(83) || keyIsDown(115)) { // 'S' or 's'
            aorc.y -= speed;
          }
          if (aorc.overlaps(twall)) {
            aorc.y = height + 10;
          }
          if (aorc.overlaps(bwall)) {
            aorc.y = -10;
          }
          if (aorc.overlaps(lwall)) {
            aorc.x = width + 10;
          }
          if (aorc.overlaps(rwall)) {
            aorc.x = -10;
          }
        }
      }
      ///////Elite Orcs
      let eocdtime = millis();
      if (timer <= 260) {
        if (eocdtime - eotime >= eocd) {
          new eorcs.Sprite(-10, random(height), 50, 50);
          new eorcs.Sprite(width + 10, random(height), 50, 50);
          eotime = eocdtime;
        }
        eorcs.w = 55;
        eorcs.h = 55;
        for (let i = 0; i < eorcs.length; i++) {
          let eorc = eorcs[i];
          eorc.moveTo(player.x, player.y, 0.4);
          if (eorc.x >= player.x) {
            eorc.scale.x = -2.5;
          } else if (eorc.x <= player.x) {
            eorc.scale.x = 2.5;
          }
          if (ahitbox.overlap(eorc)) {
            ehit.play();
            eorc.hp -= dmg;
            if (eorc.x >= player.x) {
              eorc.x += knock;
            } else if (eorc.x <= player.x) {
              eorc.x -= knock;
            }
          }
          if (eorc.hp <= 0) {
            score += 1;
            new exps.Sprite(eorc.x, eorc.y, 0.6);
            eorc.remove();
          }
          if (keyIsDown(65) || keyIsDown(97)) { // 'A' or 'a'
            eorc.x += speed;
          }
          if (keyIsDown(68) || keyIsDown(100)) { // 'D' or 'd'
            eorc.x -= speed;
          }
          if (keyIsDown(87) || keyIsDown(119)) { // 'W' or 'w'
            eorc.y += speed;
          }

          if (keyIsDown(83) || keyIsDown(115)) { // 'S' or 's'
            eorc.y -= speed;
          }
          if (eorc.overlaps(twall)) {
            eorc.y = height + 10;
          }
          if (eorc.overlaps(bwall)) {
            eorc.y = -10;
          }
          if (eorc.overlaps(lwall)) {
            eorc.x = width + 10;
          }
          if (eorc.overlaps(rwall)) {
            eorc.x = -10;
          }
        }
      }
      ////Exps
      exps.w = 30;
      exps.h = 30;
      for (let i = 0; i < exps.length; i++) {
        let exp = exps[i];
        exp.moveTo(player.x, player.y, 2);
        if (exp.overlaps(player)){
          expc += 1;
          exp.remove();
        }
        if (keyIsDown(65) || keyIsDown(97)) { // 'A' or 'a'
          exp.x += speed;
        }
        if (keyIsDown(68) || keyIsDown(100)) { // 'D' or 'd'
          exp.x -= speed;
        }
        if (keyIsDown(87) || keyIsDown(119)) { // 'W' or 'w'
          exp.y += speed;
        }
        if (keyIsDown(83) || keyIsDown(115)) { // 'S' or 's'
          exp.y -= speed;
        }
      }
      //Header
      textFont(gamefont);
      fill(250, 233, 185);
      textSize(30);
      textAlign(LEFT);
      text("World-1", 7, 30);
      textAlign(CENTER);
      text('Time: ' + timer, width / 2 - 5, 30);
      textAlign(RIGHT);
      text("Score: " + score, width - 9, 30);

      allSprites.draw();
      //UI
      ///Music
      imageMode(CENTER);
      if (mouseX >= width - 55 && mouseX <= width - 5 && mouseY >= height - 55 && mouseY <= height - 5) {
        musw = 60;
        mush = 60;
      } else {
        musw = 50;
        mush = 50;
      }
      image(muscheck, width - 30, height - 30, musw, mush);
      ///Cursor
      noCursor();
      image(crsr, mouseX, mouseY, 30, 34);
      ///Timer
      if (frameCount % 60 == 0 && timer > 0) {
        //new orc.Sprite(width/2, height/2, 50, 50);
        timer--;
      }
      if (timer == 0) {
        textAlign(CENTER);
        text("You Win!", width / 2 - 5, height / 2);
      }
      ///Exp Display
      textAlign(CENTER);
      text('Exp: ' + expc, width / 2 - 5, height-30);
    } break;
  }
}

function mouseClicked() {
  if (mouseX >= width / 2 - 140 && mouseX <= width / 2 + 140 && mouseY >= 250 - 40 && mouseY <= 250 + 40 && scene == 0) {
    click.play();
    song.stop();
    song = w1m;
    song.loop();
    scene = 1;
    player.x = width / 2;
  }
  //Music Button Controls
  if (mouseX >= width - 55 && mouseX <= width - 5 && mouseY >= height - 55 && mouseY <= height - 5) {
    if (muscheck == muson) {
      click.play();
      song.pause();
      muscheck = musoff;
    } else if (muscheck == musoff) {
      click.play();
      song.loop();
      muscheck = muson;
    }
  }
}

function soundV() {
  song.setVolume(bgmv);
  if (bgmv <= 0) {
    bgmv = 0;
  }
  if (bgmv >= 1) {
    bgmv = 1;
  }
}

