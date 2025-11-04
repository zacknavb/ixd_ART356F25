function buttons() {
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

    rectMode(CENTER);
    imageMode(CENTER);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 1200 - 75 && mouseX < width - 1200 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
        stroke(179, 158, 102);
        bw1 = 170;
        bh1 = 320;
    } else {
        bw1 = 150;
        bh1 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 1200, height / 2 - 200, bw1, bh1, 10);
    image(img1, width - 1200, height / 2 - 200, bw1-10, bh1-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data1.name,width - 1200, height / 2 - 220, bw1, bh1);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 1200 - 75 && mouseX < width - 1200 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
        stroke(179, 158, 102);
        bw2 = 170;
        bh2 = 320;
    } else {
        bw2 = 150;
        bh2 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 1200, height / 2 + 200, bw2, bh2, 10);
    image(img2, width - 1200, height / 2 + 200, bw2-10, bh2-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data2.name,width - 1200, height / 2 + 180, bw2, bh2);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 1000 - 75 && mouseX < width - 1000 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
        stroke(179, 158, 102);
        bw3 = 170;
        bh3 = 320;
    } else {
        bw3 = 150;
        bh3 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 1000, height / 2 - 200, bw3, bh3, 10);
    image(img3, width - 1000, height / 2 - 200, bw3-10, bh3-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data3.name,width - 1000, height / 2 - 220, bw3, bh3);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 1000 - 75 && mouseX < width - 1000 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
        stroke(179, 158, 102);
        bw4 = 170;
        bh4 = 320;
    } else {
        bw4 = 150;
        bh4 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 1000, height / 2 + 200, bw4, bh4, 10);
    image(img4, width - 1000, height / 2 + 200, bw4-10, bh4-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data4.name,width - 1000, height / 2 + 180, bw4, bh4);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 800 - 75 && mouseX < width - 800 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
        stroke(179, 158, 102);
        bw5 = 170;
        bh5 = 320;
    } else {
        bw5 = 150;
        bh5 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 800, height / 2 - 200, bw5, bh5, 10);
    image(img5, width - 800, height / 2 - 200, bw5-10, bh5-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data5.name,width - 800, height / 2 - 220, bw5, bh5);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 800 - 75 && mouseX < width - 800 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
        stroke(179, 158, 102);
        bw6 = 170;
        bh6 = 320;
    } else {
        bw6 = 150;
        bh6 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 800, height / 2 + 200, bw6, bh6, 10);
    image(img6, width - 800, height / 2 + 200, bw6-10, bh6-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data6.name,width - 800, height / 2 + 180, bw6, bh6);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 600 - 75 && mouseX < width - 600 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
        stroke(179, 158, 102);
        bw7 = 170;
        bh7 = 320;
    } else {
        bw7 = 150;
        bh7 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 600, height / 2 - 200, bw7, bh7, 10);
    image(img7, width - 600, height / 2 - 200, bw7-10, bh7-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data7.name,width - 600, height / 2 - 220, bw7, bh7);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 600 - 75 && mouseX < width - 600 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
        stroke(179, 158, 102);
        bw8 = 170;
        bh8 = 320;
    } else {
        bw8 = 150;
        bh8 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 600, height / 2 + 200, bw8, bh8, 10);
    image(img8, width - 600, height / 2 + 200, bw8-10, bh8-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data8.name,width - 600, height / 2 + 180, bw8, bh8);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 400 - 75 && mouseX < width - 400 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
        stroke(179, 158, 102);
        bw9 = 170;
        bh9 = 320;
    } else {
        bw9 = 150;
        bh9 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 400, height / 2 - 200, bw9, bh9, 10);
    image(img9, width - 400, height / 2 - 200, bw9-10, bh9-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data9.name,width - 400, height / 2 - 220, bw9, bh9);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 400 - 75 && mouseX < width - 400 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
        stroke(179, 158, 102);
        bw10 = 170;
        bh10 = 320;
    } else {
        bw10 = 150;
        bh10 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 400, height / 2 + 200, bw10, bh10, 10);
    image(img10, width - 400, height / 2 + 200, bw10-10, bh10-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data10.name,width - 400, height / 2 + 180, bw10, bh10);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 200 - 75 && mouseX < width - 200 + 75 && mouseY > height / 2 - 200 - 150 && mouseY < height / 2 - 200 + 150) {
        stroke(179, 158, 102);
        bw11 = 170;
        bh11 = 320;
    } else {
        bw11 = 150;
        bh11 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 200, height / 2 - 200, bw11, bh11, 10);
    image(img11, width - 200, height / 2 - 200, bw11-10, bh11-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data11.name,width - 200, height / 2 - 220, bw11, bh11, 10);
    fill(171, 165, 145);
    strokeWeight(8);

    if (mouseX > width - 200 - 75 && mouseX < width - 200 + 75 && mouseY > height / 2 + 200 - 150 && mouseY < height / 2 + 200 + 150) {
        stroke(179, 158, 102);
        bw12 = 170;
        bh12 = 320;
    } else {
        bw12 = 150;
        bh12 = 300;
        stroke(110, 95, 75);
    }
    rect(width - 200, height / 2 + 200, bw12, bh12, 10);
    image(img12, width - 200, height / 2 + 200, bw12-10, bh12-10, 10);
    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(30)
    strokeWeight(0);
    textFont(headfont);
    text(data12.name,width - 200, height / 2 + 180, bw12, bh12);
    fill(171, 165, 145);
    strokeWeight(8);
    
}