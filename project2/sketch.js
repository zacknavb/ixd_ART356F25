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
let barbarian;
let bard;
let cleric;
let druid;
let fighter;
let monk;
let paladin;
let ranger;
let rogue;
let sorcerer;
let warlock;
let wizard;

let bw1;
let bh1;
let bw2;
let bh2;
let bw3;
let bh3;
let bw4;
let bh4;
let bw5;
let bh5;
let bw6;
let bh6;
let bw7;
let bh7;
let bw8;
let bh8;
let bw9;
let bh9;
let bw10;
let bh10;
let bw11;
let bh11;
let bw12;
let bh12;

function preload(){
  data1 = loadJSON("barbarian.json");
  barbarian = data1.barbarian;
  data2 = loadJSON("bard.json");
  bard = data2.bard;
  data3 = loadJSON("cleric.json");
  cleric = data3.cleric;
  data4 = loadJSON("druid.json");
  druid = data4.druid;
  data5 = loadJSON("fighter.json");
  fighter = data5.fighter;
  data6 = loadJSON("monk.json");
  monk = data6.monk;
  data7 = loadJSON("paladin.json");
  paladin = data7.paladin;
  data8 = loadJSON("ranger.json");
  ranger = data8.ranger;
  data9 = loadJSON("rogue.json");
  rogue = data9.rogue;
  data10 = loadJSON("sorcerer.json");
  sorcerer = data10.sorcerer;
  data11 = loadJSON("warlock.json");
  warlock = data11.warlock;
  data12 = loadJSON("wizard.json");
  wizard = data12.wizard;
}
function setup() {
  createCanvas(1400, 900);
}

function draw() {
  background(38, 36, 31);

  rectMode(CENTER);
  fill(171, 165, 145);
  strokeWeight(8);

  if (mouseX > width-1200-75 && mouseX < width-1200+75 && mouseY > height/2-200-150 && mouseY < height/2-200+150){
    stroke(247, 220, 151);
    bw1 = 170;
    bh1 = 320;
  } else {
    bw1 = 150;
    bh1 = 300;
    stroke(110, 95, 75);
  }
  rect(width-1200, height/2-200, bw1, bh1, 10);

  if (mouseX > width-1200-75 && mouseX < width-1200+75 && mouseY > height/2+200-150 && mouseY < height/2+200+150){
    stroke(247, 220, 151);
    bw2 = 170;
    bh2 = 320;
  } else {
    bw2 = 150;
    bh2 = 300;
    stroke(110, 95, 75);
  }
  rect(width-1200, height/2+200, bw2, bh2, 10);

  if (mouseX > width-1000-75 && mouseX < width-1000+75 && mouseY > height/2-200-150 && mouseY < height/2-200+150){
    stroke(247, 220, 151);
    bw3 = 170;
    bh3 = 320;
  } else {
    bw3 = 150;
    bh3 = 300;
    stroke(110, 95, 75);
  }
  rect(width-1000, height/2-200, bw3, bh3, 10);

  if (mouseX > width-1000-75 && mouseX < width-1000+75 && mouseY > height/2+200-150 && mouseY < height/2+200+150){
    stroke(247, 220, 151);
    bw4 = 170;
    bh4 = 320;
  } else {
    bw4 = 150;
    bh4 = 300;
    stroke(110, 95, 75);
  }
  rect(width-1000, height/2+200, bw4, bh4, 10);

  if (mouseX > width-800-75 && mouseX < width-800+75 && mouseY > height/2-200-150 && mouseY < height/2-200+150){
    stroke(247, 220, 151);
    bw5 = 170;
    bh5 = 320;
  } else {
    bw5 = 150;
    bh5 = 300;
    stroke(110, 95, 75);
  }
  rect(width-800, height/2-200, bw5, bh5, 10);

  if (mouseX > width-800-75 && mouseX < width-800+75 && mouseY > height/2+200-150 && mouseY < height/2+200+150){
    stroke(247, 220, 151);
    bw6 = 170;
    bh6 = 320;
  } else {
    bw6 = 150;
    bh6 = 300;
    stroke(110, 95, 75);
  }
  rect(width-800, height/2+200, bw6, bh6, 10);

  if (mouseX > width-600-75 && mouseX < width-600+75 && mouseY > height/2-200-150 && mouseY < height/2-200+150){
    stroke(247, 220, 151);
    bw7 = 170;
    bh7 = 320;
  } else {
    bw7 = 150;
    bh7 = 300;
    stroke(110, 95, 75);
  }
  rect(width-600, height/2-200, bw7, bh7, 10);

  if (mouseX > width-600-75 && mouseX < width-600+75 && mouseY > height/2+200-150 && mouseY < height/2+200+150){
    stroke(247, 220, 151);
    bw8 = 170;
    bh8 = 320;
  } else {
    bw8 = 150;
    bh8 = 300;
    stroke(110, 95, 75);
  }
  rect(width-600, height/2+200, bw8, bh8, 10);

  if (mouseX > width-400-75 && mouseX < width-400+75 && mouseY > height/2-200-150 && mouseY < height/2-200+150){
    stroke(247, 220, 151);
    bw9 = 170;
    bh9 = 320;
  } else {
    bw9 = 150;
    bh9 = 300;
    stroke(110, 95, 75);
  }
  rect(width-400, height/2-200, bw9, bh9, 10);

  if (mouseX > width-400-75 && mouseX < width-400+75 && mouseY > height/2+200-150 && mouseY < height/2+200+150){
    stroke(247, 220, 151);
    bw10 = 170;
    bh10 = 320;
  } else {
    bw10 = 150;
    bh10 = 300;
    stroke(110, 95, 75);
  }
  rect(width-400, height/2+200, bw10, bh10, 10);

  if (mouseX > width-200-75 && mouseX < width-200+75 && mouseY > height/2-200-150 && mouseY < height/2-200+150){
    stroke(247, 220, 151);
    bw11 = 170;
    bh11 = 320;
  } else {
    bw11 = 150;
    bh11 = 300;
    stroke(110, 95, 75);
  }
  rect(width-200, height/2-200, bw11, bh11, 10);

  if (mouseX > width-200-75 && mouseX < width-200+75 && mouseY > height/2+200-150 && mouseY < height/2+200+150){
    stroke(247, 220, 151);
    bw12 = 170;
    bh12 = 320;
  } else {
    bw12 = 150;
    bh12 = 300;
    stroke(110, 95, 75);
  }
  rect(width-200, height/2+200, bw12, bh12, 10);

}
