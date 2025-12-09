let bg;
let gamefont, titlefont;

//UI
let banner, btn, crsr, muson, musoff;
let bw1, bh2, musw, mush, muscheck;
let add, sub, back, contrb, soundb;
let letw, leta, lets, letd, upA, leftA, downA, rightA, escB;
let addw1, addh1, subw1, subh1, addw2, addh2, subw2, subh2, backw, backh;
let soundw, soundh, contrw, contrh;

let timer = 300;
let score = 0;

//sounds
let phit, ehit, swatt, hover, conf, cancel, click;
let sfxv = 0.6;
//music
let titlem, w1m, win, lose, pausem, song;
var bgmv = 0.2;
//attack timer
let atime = 0;
let cd = 3000;
let ahitbox;
let ahitboxspawned = false;
let ahitboxX;

let fws;

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

//Player
let player, exps, youwin, youlose;
let twall, bwall, lwall, rwall;
//Stats
let speed, dmg, maxhp;
let attI, attsI, spdI, healI, hpI;
let knock, expc, level;
let sword;
let hpbar;

//Checks
let faceR;
faceR = true;
let lvlup;
lvlup = false;

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

  //Music
  titlem = loadSound('assets/music/title.wav');
  w1m = loadSound('assets/music/world1.wav');
  win = loadSound('assets/music/win.wav');
  lose = loadSound('assets/music/lose.wav');
  pausem = loadSound('assets/music/levelup.wav');


  song = titlem;

  //UI
  banner = loadImage("assets/ui/banner.png");
  btn = loadImage("assets/ui/btn.png");
  crsr1 = loadImage("assets/ui/cursor.png");
  muson = loadImage("assets/ui/muson.png");
  musoff = loadImage("assets/ui/musoff.png");
  add = loadImage("assets/ui/add.png");
  sub = loadImage("assets/ui/sub.png");
  back = loadImage("assets/ui/back.png");
  contrb = loadImage("assets/ui/contr.png");
  soundb = loadImage("assets/ui/sound.png");
  letw = loadImage("assets/ui/letW.png");
  leta = loadImage("assets/ui/letA.png");
  lets = loadImage("assets/ui/letS.png");
  letd = loadImage("assets/ui/letD.png");
  upA = loadImage("assets/ui/upA.png");
  leftA = loadImage("assets/ui/leftA.png");
  downA = loadImage("assets/ui/downA.png");
  rightA = loadImage("assets/ui/rightA.png");
  escB = loadImage("assets/ui/escB.png");

  crsr = crsr1;

  //Player Win/Lose


  //Stat Icons
  attI = loadImage("assets/ui/lvlup/atticon.png");
  attsI = loadImage("assets/ui/lvlup/attsicon.png");
  spdI = loadImage("assets/ui/lvlup/spdicon.png");
  hpI = loadImage("assets/ui/lvlup/hpicon.png");
  healI = loadImage("assets/ui/lvlup/healicon.png");

  muscheck = muson;
  musw = 50;
  mush = 50;
}
function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("specialDiv");
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
        hit: { row: 5, frames: 5, frameDelay: 3 },
        death: { row: 6, frames: 4, frameDelay: 3 }
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
      maxhp = 200;
      player.hp = maxhp;

      //Player Death Ani
      youlose = new Group();
      youlose.anis.frameDelay = 10;
      youlose.addAni("assets/player/swordsman/swordD.png", { width: 100, height: 100, frames: 4 });
      youlose.scale = 3;
      youlose.animation.looping = false;
      youlose.overlaps(allSprites);

      //Player Death Ani
      youwin = new Group();
      youwin.anis.frameDelay = 2;
      youwin.addAni("assets/player/swordsman/swordW.png", { width: 100, height: 100, frames: 15 });
      youwin.scale = 3;
      youwin.overlaps(allSprites);

      //Exp
      exps = new Group();
      exps.anis.frameDelay = 3;
      exps.addAni("assets/player/exp.png", { width: 16, height: 16, frames: 4 });
      exps.scale = 1.5;
      exps.overlaps(allSprites);

      //Fireworks
      fws = new Group();
      fws.anis.frameDelay = 1;
      fws.addAni("assets/fwani.png", { width: 92, height: 94, frames: 57 });
      fws.scale = 3;
      fws.overlaps(allSprites);

      //Orcs
      orcs = new Group();
      orcs.anis.frameDelay = 8;
      orcs.addAni("assets/enemies/orcw.png", { width: 100, height: 100, frames: 6 });
      orcs.scale = 2;
      orcs.rotationLock = true;
      orcs.overlaps(allSprites);
      orcs.speed = 1;
      orcs.hp = 10;
      //Orc Riders
      rorcs = new Group();
      rorcs.anis.frameDelay = 8;
      rorcs.addAni("assets/enemies/rorcw.png", { width: 100, height: 100, frames: 8 });
      rorcs.scale = 2;
      rorcs.rotationLock = true;
      rorcs.overlaps(allSprites);
      rorcs.speed = 2.5;
      rorcs.hp = 15;
      //Armored Orcs
      aorcs = new Group();
      aorcs.anis.frameDelay = 8;
      aorcs.addAni("assets/enemies/aorcw.png", { width: 100, height: 100, frames: 8 });
      aorcs.scale = 2.3;
      aorcs.rotationLock = true;
      aorcs.overlaps(allSprites);
      aorcs.speed = 1;
      aorcs.hp = 40;
      //Elite Orcs
      eorcs = new Group();
      eorcs.anis.frameDelay = 8;
      eorcs.addAni("assets/enemies/eorcw.png", {
        width: 100, height: 100, frames: 8
      });
      eorcs.scale = 2.5;
      eorcs.rotationLock = true;
      eorcs.overlaps(allSprites);
      eorcs.speed = 1;
      eorcs.hp = 100;
    } break;
  }
}

function draw() {
  clear();
  switch (scene) {
    case 0: {
      player.changeAni('idle');
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
      if (mouseX >= width / 2 - 140 && mouseX <= width / 2 + 140 && mouseY >= 390 - 40 && mouseY <= 390 + 40) {
        fill(217, 208, 132);
      }
      else {
        fill(250, 233, 185);
      }
      text("SETTINGS", width / 2 - 5, 405);

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
      if (kb.presses('d') || kb.pressing('right')) {
        faceR = true;
      } else if (kb.presses('a') || kb.pressing('left')) {
        faceR = false;
      }
      if (faceR == true) {
        player.scale.x = 2;
      }
      else {
        player.scale.x = -2;
      }
      if (player.ani.name != 'attack' && player.ani.name != 'hit') {
        if (kb.pressing('w') || kb.pressing('up')) {
          player.changeAni('walk');
        } else if (kb.pressing('a') || kb.pressing('left')) {
          player.changeAni('walk');
        } else if (kb.pressing('s') || kb.pressing('down')) {
          player.changeAni('walk');
        } else if (kb.pressing('d') || kb.pressing('right')) {
          player.changeAni('walk');
        } else if (player.ani.name != 'idle') {
          player.changeAni('idle');
        }
      }

      if (player.hp <= 0) {
        player.hp = 0;
        player.x = -50
        song.stop();
        lose.play();
        exps.cull(-1000);
        orcs.cull(-1000);
        rorcs.cull(-1000);
        aorcs.cull(-1000);
        eorcs.cull(-1000);
        youlose.scale = 3;
        new youlose.Sprite(width / 2 - 20, 130, 50, 50);
        scene = 7;
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
      //Pause
      if (kb.presses('escape')) {
        click.play();
        allSprites.autoUpdate = false;
        world.autoStep = false;
        if (muscheck == muson) {
          song.pause();
        }
        song = pausem;
        if (muscheck == muson) {
          song.loop();
        }
        scene = 6;
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
        if (timer <= 250) {
          new orcs.Sprite(-10, random(height), 50, 50);
          new orcs.Sprite(width + 10, random(height), 50, 50);
        }
        if (timer <= 200) {
          new orcs.Sprite(-10, random(height), 50, 50);
          new orcs.Sprite(width + 10, random(height), 50, 50);
        }
        if (timer <= 180) {
          new orcs.Sprite(-10, random(height), 50, 50);
          new orcs.Sprite(width + 10, random(height), 50, 50);
        }
        if (timer <= 100) {
          new orcs.Sprite(-10, random(height), 50, 50);
          new orcs.Sprite(width + 10, random(height), 50, 50);
        }
        if (timer <= 50) {
          new orcs.Sprite(-10, random(height), 50, 50);
          new orcs.Sprite(width + 10, random(height), 50, 50);
        }
        otime = ocdtime;
      }
      orcs.w = 30;
      orcs.h = 30;
      for (let i = 0; i < orcs.length; i++) {
        let orc = orcs[i];
        orc.moveTo(player.x, player.y, 0.9);
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
        if (orc.overlaps(player)) {
          phit.play();
          playerHit();
          player.hp -= 10;
          if (orc.x >= width / 2) {
            orc.x += 50
          } else if (orc.x <= width / 2) {
            orc.x -= 50
          }
        }
        if (orc.hp <= 0) {
          score += 10;
          new exps.Sprite(orc.x, orc.y, 0.6);
          orc.remove();
        }
        if (keyIsDown(65) || keyIsDown(97) || keyIsDown(37)) { // 'A' or 'a' or 'left'
          orc.x += speed;
        }
        if (keyIsDown(68) || keyIsDown(100) || keyIsDown(39)) { // 'D' or 'd' or 'right'
          orc.x -= speed;
        }
        if (keyIsDown(87) || keyIsDown(119) || keyIsDown(38)) { // 'W' or 'w' or 'up'
          orc.y += speed;
        }

        if (keyIsDown(83) || keyIsDown(115) || keyIsDown(40)) { // 'S' or 's' or 'up'
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

      if (rocdtime - rotime >= rocd) {
          if (timer <= 280) {
          new rorcs.Sprite(width + 10, random(height), 50, 50);
          }
          if (timer <= 200) {
          new rorcs.Sprite(width + 10, random(height), 50, 50);
          }
          if (timer <= 150) {
          new rorcs.Sprite(width + 10, random(height), 50, 50);
          }
          if (timer <= 100) {
          new rorcs.Sprite(width + 10, random(height), 50, 50);
          }
          if (timer <= 50) {
          new rorcs.Sprite(width + 10, random(height), 50, 50);
          }
          rotime = rocdtime;
        }

      if (timer <= 280) {
        
        rorcs.w = 50;
        rorcs.h = 55;
        for (let i = 0; i < rorcs.length; i++) {
          let rorc = rorcs[i];
          rorc.moveTo(player.x, player.y, 1.7);
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
          if (rorc.overlaps(player)) {
            phit.play();
            playerHit();
            player.hp -= 10;
            if (rorc.x >= width / 2) {
              rorc.x += 50
            } else if (rorc.x <= width / 2) {
              rorc.x -= 50
            }
          }
          if (rorc.hp <= 0) {
            score += 15;
            new exps.Sprite(rorc.x, rorc.y, 0.6);
            rorc.remove();
          }
          if (keyIsDown(65) || keyIsDown(97) || keyIsDown(37)) { // 'A' or 'a'
            rorc.x += speed;
          }
          if (keyIsDown(68) || keyIsDown(100) || keyIsDown(39)) { // 'D' or 'd'
            rorc.x -= speed;
          }
          if (keyIsDown(87) || keyIsDown(119) || keyIsDown(38)) { // 'W' or 'w'
            rorc.y += speed;
          }

          if (keyIsDown(83) || keyIsDown(115) || keyIsDown(40)) { // 'S' or 's'
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
          aorc.moveTo(player.x, player.y, 0.5);
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
          if (aorc.overlaps(player)) {
            phit.play();
            playerHit();
            player.hp -= 15;
            if (aorc.x >= width / 2) {
              aorc.x += 50
            } else if (aorc.x <= width / 2) {
              aorc.x -= 50
            }
          }
          if (aorc.hp <= 0) {
            score += 25;
            new exps.Sprite(aorc.x, aorc.y, 0.6);
            aorc.remove();
          }
          if (keyIsDown(65) || keyIsDown(97) || keyIsDown(37)) { // 'A' or 'a'
            aorc.x += speed;
          }
          if (keyIsDown(68) || keyIsDown(100) || keyIsDown(39)) { // 'D' or 'd'
            aorc.x -= speed;
          }
          if (keyIsDown(87) || keyIsDown(119) || keyIsDown(38)) { // 'W' or 'w'
            aorc.y += speed;
          }

          if (keyIsDown(83) || keyIsDown(115) || keyIsDown(40)) { // 'S' or 's'
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
          eorc.moveTo(player.x, player.y, 0.5);
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
          if (eorc.overlaps(player)) {
            phit.play();
            playerHit();
            player.hp -= 10;
            if (eorc.x >= width / 2) {
              eorc.x += 50
            } else if (eorc.x <= width / 2) {
              eorc.x -= 50
            }
          }
          if (eorc.hp <= 0) {
            score += 50;
            new exps.Sprite(eorc.x, eorc.y, 0.6);
            eorc.remove();
          }
          if (keyIsDown(65) || keyIsDown(97) || keyIsDown(37)) { // 'A' or 'a'
            eorc.x += speed;
          }
          if (keyIsDown(68) || keyIsDown(100) || keyIsDown(39)) { // 'D' or 'd'
            eorc.x -= speed;
          }
          if (keyIsDown(87) || keyIsDown(119) || keyIsDown(38)) { // 'W' or 'w'
            eorc.y += speed;
          }

          if (keyIsDown(83) || keyIsDown(115) || keyIsDown(40)) { // 'S' or 's'
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
        if (exp.overlaps(player)) {
          expc += 1;
          exp.remove();
        }
        if (keyIsDown(65) || keyIsDown(97) || keyIsDown(37)) { // 'A' or 'a'
          exp.x += speed;
        }
        if (keyIsDown(68) || keyIsDown(100) || keyIsDown(39)) { // 'D' or 'd'
          exp.x -= speed;
        }
        if (keyIsDown(87) || keyIsDown(119) || keyIsDown(38)) { // 'W' or 'w'
          exp.y += speed;
        }
        if (keyIsDown(83) || keyIsDown(115) || keyIsDown(40)) { // 'S' or 's'
          exp.y -= speed;
        }
      }
      //Level
      if (expc >= 5 && level <= 3) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;

      } else if (expc >= 10 && level <= 5) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      } else if (expc >= 15 && level <= 10) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      } else if (expc >= 20 && level <= 15) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      } else if (expc >= 25 && level <= 20) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      } else if (expc >= 30 && level <= 25) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      } else if (expc >= 35 && level <= 30) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      } else if (expc >= 40 && level >= 31) {
        level++;
        expc = 0;
        conf.play();
        lvlup = true;
        allSprites.autoUpdate = false;
        world.autoStep = false;
        scene = 5;
      }
      //Header
      allSprites.draw();
      textFont(gamefont);
      strokeWeight(5);
      stroke(31, 22, 14);
      fill(250, 233, 185);
      textSize(30);
      textAlign(LEFT);
      text("Level: " + level, 7, 30);
      textAlign(CENTER);
      text('Time: ' + timer, width / 2 - 5, 30);
      textAlign(RIGHT);
      text("Score: " + score, width - 9, 30);
      //UI

      ///Timer
      if (frameCount % 60 == 0 && timer > 0) {
        //new orc.Sprite(width/2, height/2, 50, 50);
        timer--;
      }
      if (timer == 0) {
        player.x = -50
        if (muscheck == muson) {
          song.stop();
        }
        song = win;
        if (muscheck == muson) {
          song.loop();
        }
        exps.cull(-1000);
        orcs.cull(-1000);
        rorcs.cull(-1000);
        aorcs.cull(-1000);
        eorcs.cull(-1000);
        youwin.scale = 3;
        new youwin.Sprite(width / 2 - 20, 130, 50, 50);
        scene = 8;
      }
      ///HP Bar
      textAlign(CENTER);
      if (player.hp >= maxhp) {
        player.hp = maxhp;
      }
      hpbar = player.hp / maxhp;
      hpbar *= 100;
      hpbar /= 2;
      hpbar = hpbar.toFixed(0);
      rectMode(CENTER);
      fill(38, 36, 33);
      rect(player.x, player.y - 35, 52, 9, 2);
      rectMode(LEFT);
      fill(83, 122, 92);
      rect(player.x, player.y - 35, hpbar, 9, 20);
      ///Exp Display
      textAlign(CENTER);
      fill(250, 233, 185);
      text('Exp: ' + expc, width / 2 - 5, height - 30);
    } break;
    //Settings Screen
    case 2: {
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
      fill(48, 44, 40, 200);
      textSize(50);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width / 2, 380, 380, 350, 5);
      fill(250, 233, 185);
      textSize(30);
      text("Settings", width / 2 - 5, 235);
      textSize(22);
      text("Sound", width / 2 - 5, 285);
      text("Controls", width / 2 - 5, 390);
      ///Sound Button
      imageMode(CENTER);
      if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 300 && mouseY <= 350) {
        soundw = 60;
        soundh = 60;
      } else {
        soundw = 50;
        soundh = 50;
      }
      image(soundb, width / 2, 325, soundw, soundh);
      ///Controls Button
      imageMode(CENTER);
      if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 405 && mouseY <= 455) {
        contrw = 60;
        contrh = 60;
      } else {
        contrw = 50;
        contrh = 50;
      }
      image(contrb, width / 2, 430, contrw, contrh);
      ///Return
      imageMode(CENTER);
      if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 495 && mouseY <= 545) {
        backw = 60;
        backh = 60;
      } else {
        backw = 50;
        backh = 50;
      }
      image(back, width / 2, 520, backw, backh);
    } break;
    //Volume Settings Screen
    case 3: {
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
      fill(48, 44, 40, 200);
      textSize(50);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width / 2, 330, 380, 290, 5);
      fill(250, 233, 185);
      textSize(30);
      text("Sound SETTINGS", width / 2 - 5, 235);
      textSize(22);
      text("Music Volume", width / 2 - 5, 275);
      text("SFX Volume", width / 2 - 5, 340);
      textSize(18);
      textFont(titlefont);
      text(bgmv.toFixed(1), width / 2, 305);
      text(sfxv.toFixed(1), width / 2, 370);
      //Volume Buttons (Add)
      ///MusicV
      imageMode(CENTER);
      if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 287 && mouseY <= 313) {
        addw1 = 30;
        addh1 = 30;
      } else {
        addw1 = 26;
        addh1 = 26;
      }
      image(add, width / 2 + 35, 300, addw1, addh1);
      ///SFXV
      imageMode(CENTER);
      if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 352 && mouseY <= 378) {
        addw2 = 30;
        addh2 = 30;
      } else {
        addw2 = 26;
        addh2 = 26;
      }
      image(add, width / 2 + 35, 365, addw2, addh2);
      //Volume Buttons (Sub)
      ///MusicV
      imageMode(CENTER);
      if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 287 && mouseY <= 313) {
        subw1 = 30;
        subh1 = 30;
      } else {
        subw1 = 26;
        subh1 = 26;
      }
      image(sub, width / 2 - 35, 300, subw1, subh1);
      ///SFXV
      imageMode(CENTER);
      if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 352 && mouseY <= 378) {
        subw2 = 30;
        subh2 = 30;
      } else {
        subw2 = 26;
        subh2 = 26;
      }
      image(sub, width / 2 - 35, 365, subw2, subh2);
      ///Return
      imageMode(CENTER);
      if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 395 && mouseY <= 445) {
        backw = 60;
        backh = 60;
      } else {
        backw = 50;
        backh = 50;
      }
      image(back, width / 2, 420, backw, backh);
    } break;
    case 4: {
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
      fill(48, 44, 40, 200);
      textSize(50);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width / 2, 380, 380, 350, 5);
      fill(250, 233, 185);
      textSize(30);
      text("Controls", width / 2 - 5, 235);
      textSize(22);
      text("Movement", width / 2 - 5, 275);
      image(letw, width / 2 - 110, 310, 40, 40);
      image(leta, width / 2 - 110 - 40, 350, 40, 40);
      image(lets, width / 2 - 110, 350, 40, 40);
      image(letd, width / 2 - 110 + 40, 350, 40, 40);
      textSize(22);
      text("Or", width / 2 - 5, 350);
      image(upA, width / 2 + 110, 310, 40, 40);
      image(leftA, width / 2 + 110 - 40, 350, 40, 40);
      image(downA, width / 2 + 110, 350, 40, 40);
      image(rightA, width / 2 + 110 + 40, 350, 40, 40);
      text("Pause", width / 2 - 5, 400);
      image(escB, width / 2, 435, 40, 40);

      ///Return
      imageMode(CENTER);
      if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 495 && mouseY <= 545) {
        backw = 60;
        backh = 60;
      } else {
        backw = 50;
        backh = 50;
      }
      image(back, width / 2, 520, backw, backh);
    } break;
    case 5: {
      //Paused Game
      background(116, 122, 118);
      allSprites.draw();
      textFont(gamefont);
      stroke(31, 22, 14);
      fill(250, 233, 185);
      textSize(30);
      textAlign(LEFT);
      text("Level: " + level, 7, 30);
      textAlign(CENTER);
      text('Time: ' + timer, width / 2 - 5, 30);
      textAlign(RIGHT);
      text("Score: " + score, width - 9, 30);
      textAlign(CENTER);
      text('Exp: ' + expc, width / 2 - 5, height - 30);

      //Fireworks
      fws.scale = 3;
      new fws.Sprite(width / 2 - 350, height / 2 - 150, 50, 50);
      new fws.Sprite(width / 2 + 350, height / 2 - 150, 50, 50);
      fws.scale = 2.5;
      new fws.Sprite(width / 2 - 250, height / 2 + 100, 50, 50);
      new fws.Sprite(width / 2 + 250, height / 2 + 100, 50, 50);

      //UI
      textAlign(CENTER);
      textFont(gamefont);
      textSize(25);
      fill(48, 45, 38);
      stroke(31, 22, 14);
      strokeWeight(2);

      ///Buttons
      stroke(31, 22, 14);
      fill(48, 44, 40, 230);
      textSize(50);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width / 2, height / 2, 580, height - 20, 5);
      fill(250, 233, 185);
      text("Level Up!", width / 2 - 5, 55);
      textSize(30);
      text("Choose Your Upgrade", width / 2 - 5, 95);
      textSize(22);
      textAlign(CENTER);
      fill(31, 22, 14);
      text("------------------------------------------------------", width / 2 + 5, 135);
      text("------------------------------------------------------", width / 2 + 5, 175);
      text("------------------------------------------------------", width / 2 + 5, 215);
      text("------------------------------------------------------", width / 2 + 5, 255);
      text("------------------------------------------------------", width / 2 + 5, 295);
      text("------------------------------------------------------", width / 2 + 5, 335);
      text("------------------------------------------------------", width / 2 + 5, 375);
      text("------------------------------------------------------", width / 2 + 5, 415);
      text("------------------------------------------------------", width / 2 + 5, 455);
      text("------------------------------------------------------", width / 2 + 5, 495);
      textAlign(LEFT);
      fill(250, 233, 185);
      text("Increase ATK +5", width / 2 - 235, 155);
      text("Increase ATK SPD +100", width / 2 - 235, 235);
      text("Increase SPD +0.1", width / 2 - 235, 315);
      text("Increase Max HP +10", width / 2 - 235, 395);
      text("Heal 100", width / 2 - 235, 475);
      image(attI, width / 2 + 225, 148, 25, 25);
      image(attsI, width / 2 + 225, 228, 25, 25);
      image(spdI, width / 2 + 225, 308, 25, 25);
      image(hpI, width / 2 + 225, 388, 25, 25);
      image(healI, width / 2 + 225, 468, 25, 25);

      noStroke();
      if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 129 && mouseY <= 162) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2 + 5, 149, 500, 30, 5);
      if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 209 && mouseY <= 242) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2 + 5, 229, 500, 30, 5);
      if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 289 && mouseY <= 322) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2 + 5, 309, 500, 30, 5);
      if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 369 && mouseY <= 402) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2 + 5, 389, 500, 30, 5);
      if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 429 && mouseY <= 482) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2 + 5, 469, 500, 30, 5);
      textAlign(CENTER);
      if (cd == 500) {
        noFill();
      } else {
        fill(250, 233, 185);
        stroke(31, 22, 14);
      }
      text("MAX LVL", width / 2 + 130, 235);
    } break;
    case 6: {
      //Paused Game
      background(116, 122, 118);
      allSprites.draw();
      textFont(gamefont);
      stroke(31, 22, 14);
      fill(250, 233, 185);

      textAlign(CENTER);
      textFont(gamefont);
      textSize(25);
      fill(48, 45, 38);
      stroke(31, 22, 14);
      strokeWeight(2);

      ///Bricks Draw
      stroke(31, 22, 14);
      fill(48, 44, 40, 230);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width - 100, height / 2, 180, height - 20, 5);
      rect(100, height / 2, 180, height - 20, 5);
      rect(width / 2, height / 2, 580, height - 20, 5);

      //Left Brick
      textFont(gamefont);
      textSize(22);
      fill(250, 233, 185);
      text('Game Stats', 100 - 5, 70)
      textSize(20);
      text('Time Left:', 100 - 5, 120)
      textSize(18);
      text(timer, 100 - 5, 150)
      textSize(20);
      text('Score:', 100 - 5, 200)
      textSize(18);
      text(score, 100 - 5, 230)

      //Middle Brick
      textSize(50);
      fill(250, 233, 185);
      text("Game Paused", width / 2 - 5, 55);

      ///Controls
      textSize(22);
      text("Movement", width / 2 - 5, 125);
      image(letw, width / 2 - 110, 160, 40, 40);
      image(leta, width / 2 - 110 - 40, 200, 40, 40);
      image(lets, width / 2 - 110, 200, 40, 40);
      image(letd, width / 2 - 110 + 40, 200, 40, 40);
      textSize(22);
      text("Or", width / 2 - 5, 200);
      image(upA, width / 2 + 110, 160, 40, 40);
      image(leftA, width / 2 + 110 - 40, 200, 40, 40);
      image(downA, width / 2 + 110, 200, 40, 40);
      image(rightA, width / 2 + 110 + 40, 200, 40, 40);

      ///Volume
      textSize(22);
      text("Music Volume", width / 2 - 5, 275);
      text("SFX Volume", width / 2 - 5, 340);
      textSize(18);
      textFont(titlefont);
      text(bgmv.toFixed(1), width / 2, 305);
      text(sfxv.toFixed(1), width / 2, 370);
      //Volume Buttons (Add)
      ///MusicV
      imageMode(CENTER);
      if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 287 && mouseY <= 313) {
        addw1 = 30;
        addh1 = 30;
      } else {
        addw1 = 26;
        addh1 = 26;
      }
      image(add, width / 2 + 35, 300, addw1, addh1);
      ///SFXV
      imageMode(CENTER);
      if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 352 && mouseY <= 378) {
        addw2 = 30;
        addh2 = 30;
      } else {
        addw2 = 26;
        addh2 = 26;
      }
      image(add, width / 2 + 35, 365, addw2, addh2);
      //Volume Buttons (Sub)
      ///MusicV
      imageMode(CENTER);
      if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 287 && mouseY <= 313) {
        subw1 = 30;
        subh1 = 30;
      } else {
        subw1 = 26;
        subh1 = 26;
      }
      image(sub, width / 2 - 35, 300, subw1, subh1);
      ///SFXV
      imageMode(CENTER);
      if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 352 && mouseY <= 378) {
        subw2 = 30;
        subh2 = 30;
      } else {
        subw2 = 26;
        subh2 = 26;
      }
      image(sub, width / 2 - 35, 365, subw2, subh2);
      ///Buttons
      noFill();
      stroke(31, 22, 14);
      strokeWeight(5);
      rect(width / 2, 454, 140, 40, 5);
      rect(width / 2, 534, 140, 40, 5);
      if (mouseX >= width / 2 - 70 && mouseX <= width / 2 + 70 && mouseY >= 454 - 25 && mouseY <= 454 + 15) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2, 454, 140, 40, 5);
      if (mouseX >= width / 2 - 70 && mouseX <= width / 2 + 70 && mouseY >= 534 - 25 && mouseY <= 534 + 15) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2, 534, 140, 40, 5);
      textSize(22);
      fill(250, 233, 185);
      textFont(gamefont);
      text("Resume", width / 2 - 5, 460);
      text("Give Up", width / 2 - 5, 540);

      //Right Brick
      textFont(gamefont);
      textSize(22);
      fill(250, 233, 185);
      text('Player Stas', width - 100 - 5, 70)
      textSize(20);
      text('ATK DMG', width - 100 - 5, 120)
      textSize(18);
      text(dmg, width - 100 - 5, 150)
      textSize(20);
      text('ATK SPD', width - 100 - 5, 200)
      textSize(18);
      text(cd, width - 100 - 5, 230)
      textSize(20);
      text('SPD', width - 100 - 5, 280)
      textSize(18);
      text(speed, width - 100 - 5, 310)
      textSize(20);
      text('HP', width - 100 - 5, 360)
      textSize(18);
      text(player.hp + ' / ' + maxhp, width - 100 - 5, 390)

      if (kb.presses('escape')) {
        click.play();
        allSprites.autoUpdate = true;
        world.autoStep = true;
        if (muscheck == muson) {
          song.pause();
        }
        song = w1m;
        if (muscheck == muson) {
          song.loop();
        }
        scene = 1;
      }
    } break;
    case 7: {
      background(28, 25, 25);
      textFont(gamefont);
      stroke(31, 22, 14);
      fill(250, 233, 185);

      textAlign(CENTER);
      textFont(gamefont);
      textSize(25);
      fill(48, 45, 38);
      stroke(31, 22, 14);
      strokeWeight(2);

      ///Bricks Draw
      stroke(31, 22, 14);
      fill(48, 44, 40, 230);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width / 2, height / 2, 580, height - 20, 5);

      //Middle Brick
      textSize(50);
      fill(179, 45, 45);
      text("You Lose", width / 2 - 5, 55);

      fill(250, 233, 185);
      stroke(31, 22, 14);
      strokeWeight(5);
      textSize(22);
      text("Level:", width / 2 - 5, 220);
      text("Final Score:", width / 2 - 5, 290);
      text("Time Left:", width / 2 - 5, 360);
      textSize(20);
      text(level, width / 2 - 5, 255 - 2);
      text(score, width / 2 - 5, 325 - 2);
      text(timer, width / 2 - 5, 395 - 2);



      ///Buttons
      fill(250, 233, 185);
      noFill();
      stroke(31, 22, 14);
      strokeWeight(5);
      if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 454 - 25 && mouseY <= 454 + 15) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2, 454, 160, 40, 5);
      if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 534 - 25 && mouseY <= 534 + 15) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2, 534, 160, 40, 5);
      textSize(22);
      fill(250, 233, 185);
      textFont(gamefont);
      text("Play Again", width / 2 - 5, 460);
      text("Main Menu", width / 2 - 5, 540);
      allSprites.draw();
    } break;
    case 8: {
      background(207, 197, 182);
      textFont(gamefont);
      stroke(31, 22, 14);
      fill(250, 233, 185);

      textAlign(CENTER);
      textFont(gamefont);
      textSize(25);
      fill(48, 45, 38);
      stroke(31, 22, 14);
      strokeWeight(2);

      ///Bricks Draw
      stroke(31, 22, 14);
      fill(48, 44, 40, 230);
      imageMode(CENTER);
      rectMode(CENTER);
      strokeWeight(5);
      rect(width / 2, height / 2, 580, height - 20, 5);

      //Middle Brick
      textSize(50);
      fill(245, 191, 110);
      text("You Win!", width / 2 - 5, 55);

      fill(250, 233, 185);
      stroke(31, 22, 14);
      strokeWeight(5);
      textSize(22);
      text("Level:", width / 2 - 5, 220);
      text("Final Score:", width / 2 - 5, 290);
      text("Time Left:", width / 2 - 5, 360);
      textSize(20);
      text(level, width / 2 - 5, 255 - 2);
      text(score, width / 2 - 5, 325 - 2);
      text(timer, width / 2 - 5, 395 - 2);



      ///Buttons
      fill(250, 233, 185);
      noFill();
      stroke(31, 22, 14);
      strokeWeight(5);
      if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 454 - 25 && mouseY <= 454 + 15) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2, 454, 160, 40, 5);
      if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 534 - 25 && mouseY <= 534 + 15) {
        fill(255, 249, 224, 30);
      } else {
        noFill();
      }
      rect(width / 2, 534, 160, 40, 5);
      textSize(22);
      fill(250, 233, 185);
      textFont(gamefont);
      text("Play Again", width / 2 - 5, 460);
      text("Main Menu", width / 2 - 5, 540);
      allSprites.draw();
    } break;
  }
  soundV();
  ///Music Toggle
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
}

function mouseClicked() {
  //Home Screen Buttons
  ///Play
  if (mouseX >= width / 2 - 140 && mouseX <= width / 2 + 140 && mouseY >= 250 - 40 && mouseY <= 250 + 40 && scene == 0) {
    click.play();
    muscheck = muson;
    song.stop();
    song = w1m;
    song.loop();
    scene = 1;
    player.x = width / 2;
  }
  ///Settings
  if (mouseX >= width / 2 - 140 && mouseX <= width / 2 + 140 && mouseY >= 390 - 40 && mouseY <= 390 + 40 && scene == 0) {
    click.play();
    scene = 2;
  }
  //Settings Screen Buttons
  ///Sound Settings
  if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 300 && mouseY <= 350 && scene == 2) {
    click.play();
    scene = 3;
  }
  ///Controls Settings
  if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 405 && mouseY <= 455 && scene == 2) {
    click.play();
    scene = 4;
  }
  ///Return
  if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 495 && mouseY <= 545 && scene == 2) {
    click.play();
    scene = 0;
  }
  //Controls Buttons
  ///Return
  if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 495 && mouseY <= 545 && scene == 4) {
    click.play();
    scene = 2;
  }
  //Volume Settings Buttons
  ///Add
  ////Music Volume
  if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 287 && mouseY <= 313 && scene == 3) {
    click.play();
    bgmv += 0.1;
  }
  ////SFX Volume
  if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 352 && mouseY <= 378 && scene == 3) {
    click.play();
    sfxv += 0.1;
  }
  ///Sub
  ////Music Volume
  if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 287 && mouseY <= 313 && scene == 3) {
    click.play();
    bgmv -= 0.1;
  }
  ////SFX Volume
  if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 352 && mouseY <= 378 && scene == 3) {
    click.play();
    sfxv -= 0.1;
  }
  ///Return
  if (mouseX >= width / 2 - 25 && mouseX <= width / 2 + 25 && mouseY >= 395 && mouseY <= 445 && scene == 3) {
    click.play();
    scene = 2;
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
  //Level Up Screen
  ///Plus ATK
  if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 129 && mouseY <= 162 && scene == 5) {
    fws.cull(-1000);
    click.play();
    dmg += 5;
    lvlup = false;
    allSprites.autoUpdate = true;
    world.autoStep = true;
    scene = 1;
  }
  //Plus ATK SPD
  if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 209 && mouseY <= 242 && scene == 5) {
    if (cd >= 600) {
      fws.cull(-1000);
      click.play();
      cd -= 100;
      lvlup = false;
      allSprites.autoUpdate = true;
      world.autoStep = true;
      scene = 1;
    } else {
      cancel.play();
    }
  }
  ///Plus SPD
  if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 289 && mouseY <= 322 && scene == 5) {
    fws.cull(-1000);
    click.play();
    speed += 0.1;
    lvlup = false;
    allSprites.autoUpdate = true;
    world.autoStep = true;
    scene = 1;
  }
  ///Plus Max HP
  if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 369 && mouseY <= 402 && scene == 5) {
    fws.cull(-1000);
    click.play();
    maxhp += 10;
    player.hp += 10;
    lvlup = false;
    allSprites.autoUpdate = true;
    world.autoStep = true;
    scene = 1;
  }
  ///Heal
  if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 429 && mouseY <= 482 && scene == 5) {
    fws.cull(-1000);
    click.play();
    player.hp += 100;
    lvlup = false;
    allSprites.autoUpdate = true;
    world.autoStep = true;
    scene = 1;
  }
  //Pause Screen
  //Volume Settings Buttons
  ///Add
  ////Music Volume
  if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 287 && mouseY <= 313 && scene == 6) {
    click.play();
    bgmv += 0.1;
  }
  ////SFX Volume
  if (mouseX >= width / 2 + 22 && mouseX <= width / 2 + 48 && mouseY >= 352 && mouseY <= 378 && scene == 6) {
    click.play();
    sfxv += 0.1;
  }
  ///Sub
  ////Music Volume
  if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 287 && mouseY <= 313 && scene == 6) {
    click.play();
    bgmv -= 0.1;
  }
  ////SFX Volume
  if (mouseX >= width / 2 - 48 && mouseX <= width / 2 - 22 && mouseY >= 352 && mouseY <= 378 && scene == 6) {
    click.play();
    sfxv -= 0.1;
  }
  //Resume
  if (mouseX >= width / 2 - 70 && mouseX <= width / 2 + 70 && mouseY >= 454 - 25 && mouseY <= 454 + 15 && scene == 6) {
    click.play();
    allSprites.autoUpdate = true;
    world.autoStep = true;
    if (muscheck == muson) {
      song.pause();
    }
    song = w1m;
    if (muscheck == muson) {
      song.loop();
    }
    scene = 1;
  }
  //Give Up
  if (mouseX >= width / 2 - 70 && mouseX <= width / 2 + 70 && mouseY >= 534 - 25 && mouseY <= 534 + 15 && scene == 6) {
    click.play();
    allSprites.autoUpdate = true;
    world.autoStep = true;
    exps.cull(-1000);
    orcs.cull(-1000);
    rorcs.cull(-1000);
    aorcs.cull(-1000);
    eorcs.cull(-1000);
    dmg = 10;
    speed = 2;
    maxhp = 200;
    player.hp = 200;
    cd = 3000;
    timer = 300;
    score = 0;
    level = 1;
    expc = 0;
    player.x = -50;

    if (muscheck == muson) {
      song.pause();
    }
    song = titlem;
    if (muscheck == muson) {
      song.loop();
    }

    scene = 0;
  }
  //You Lose
  ///Play Again Button
  if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 454 - 25 && mouseY <= 454 + 15 && scene == 7) {
    click.play();
    lose.stop();
    allSprites.autoUpdate = true;
    world.autoStep = true;
    exps.cull(-1000);
    orcs.cull(-1000);
    rorcs.cull(-1000);
    aorcs.cull(-1000);
    eorcs.cull(-1000);
    youlose.cull(-1000);
    dmg = 10;
    speed = 2;
    maxhp = 200;
    player.hp = maxhp;
    cd = 3000;
    timer = 300;
    score = 0;
    level = 1;
    expc = 0;
    player.x = width / 2;

    if (muscheck == muson) {
      song.stop();
    }
    song = w1m;
    if (muscheck == muson) {
      song.loop();
    }

    scene = 1;
  }
  ///Main Menu Button
  if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 534 - 25 && mouseY <= 534 + 15 && scene == 7) {
    click.play();
    lose.stop();
    allSprites.autoUpdate = true;
    world.autoStep = true;
    exps.cull(-1000);
    orcs.cull(-1000);
    rorcs.cull(-1000);
    aorcs.cull(-1000);
    eorcs.cull(-1000);
    youlose.cull(-1000);
    dmg = 10;
    speed = 2;
    maxhp = 200;
    player.hp = maxhp;
    cd = 3000;
    timer = 300;
    score = 0;
    level = 1;
    expc = 0;
    player.x = -50;

    if (muscheck == muson) {
      song.stop();
    }
    song = titlem;
    if (muscheck == muson) {
      song.loop();
    }

    scene = 0;
  }
  //You Win
  ///Play Again Button
  if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 454 - 25 && mouseY <= 454 + 15 && scene == 8) {
    click.play();
    lose.stop();
    allSprites.autoUpdate = true;
    world.autoStep = true;
    exps.cull(-1000);
    orcs.cull(-1000);
    rorcs.cull(-1000);
    aorcs.cull(-1000);
    eorcs.cull(-1000);
    youwin.cull(-1000);
    dmg = 10;
    speed = 2;
    maxhp = 200;
    player.hp = maxhp;
    cd = 3000;
    timer = 300;
    score = 0;
    level = 1;
    expc = 0;
    player.x = width / 2;

    if (muscheck == muson) {
      song.stop();
    }
    song = w1m;
    if (muscheck == muson) {
      song.loop();
    }

    scene = 1;
  }
  ///Main Menu Button
  if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= 534 - 25 && mouseY <= 534 + 15 && scene == 8) {
    click.play();
    allSprites.autoUpdate = true;
    world.autoStep = true;
    exps.cull(-1000);
    orcs.cull(-1000);
    rorcs.cull(-1000);
    aorcs.cull(-1000);
    eorcs.cull(-1000);
    youwin.cull(-1000);
    dmg = 10;
    speed = 2;
    maxhp = 200;
    player.hp = maxhp;
    cd = 3000;
    timer = 300;
    score = 0;
    level = 1;
    expc = 0;
    player.x = -50;

    if (muscheck == muson) {
      song.stop();
    }
    song = titlem;
    if (muscheck == muson) {
      song.loop();
    }

    scene = 0;
  }
}

function soundV() {
  //BGM
  song.setVolume(bgmv);
  lose.setVolume(bgmv);
  if (bgmv <= 0) {
    bgmv = 0;
  }
  if (bgmv >= 1) {
    bgmv = 1;
  }
  //SFX
  swatt.setVolume(sfxv);
  phit.setVolume(sfxv);
  ehit.setVolume(sfxv);
  click.setVolume(sfxv);
  conf.setVolume(sfxv);
  cancel.setVolume(sfxv);
  if (sfxv <= 0) {
    sfxv = 0;
  }
  if (sfxv >= 1) {
    sfxv = 1;
  }
}

async function playerHit() {
  await player.changeAni('hit');
  player.changeAni('idle');
}
