let barbarian;
let data;

function preload(){
    data = loadJSON("barbarian.json");
    barbarian = data.barbarian;
}

function setup(){
    createCanvas(1400, 900);
}

function draw(){
    background(38, 36, 31);

}