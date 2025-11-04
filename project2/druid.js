function data4info(){
    prof = data4.proficiencies;
    equip = data4.starting_equipment;
    equipc = data4.starting_equipment_options;

    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(60)
    strokeWeight(0);
    textFont(headfont);
    text(data4.name,width/2,100);
    fill(255, 239, 196);
    textFont('Courier New');
    textSize(16);
    text('Hit die: ' + data4.hit_die, width/2, 200);
    text('Proficiencies: ' + prof[0].name + ", " + prof[1].name + ", " + prof[2].name + ", " + prof[3].name + ", " + prof[4].name + ", " + prof[5].name + ", " + prof[6].name + ", " + prof[7].name + ", " + prof[8].name + ", " + prof[9].name + ", " + prof[10].name + ", " + prof[11].name + ", " + prof[12].name, width/2, 300);
    text(prof[13].name + ", " + prof[14].name + ", " + prof[15].name, width/2, 330);
    text('Starting Equipment: ' + equip[0].equipment.name + ", " + equip[1].equipment.name, width/2, 400);
    text('Starting Equipment Options: ', width/2, 500);
    text(equipc[0].desc, width/2, 520);
    text(equipc[1].desc, width/2, 540);
}