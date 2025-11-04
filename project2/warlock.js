function data11info(){
    prof = data11.proficiencies;
    equip = data11.starting_equipment;
    equipc = data11.starting_equipment_options;

    fill(179, 158, 102);
    textAlign(CENTER);
    textSize(60)
    strokeWeight(0);
    textFont(headfont);
    text(data11.name,width/2,100);
    fill(255, 239, 196);
    textFont('Courier New');
    textSize(16);
    text('Hit die: ' + data11.hit_die, width/2, 200);
    text('Proficiencies: ' + prof[0].name + ", " + prof[1].name + ", " + prof[2].name + ", " + prof[3].name, width/2, 300);
    text('Starting Equipment: ' + equip[0].equipment.name + ", " + equip[1].equipment.name, width/2, 400);
    text('Starting Equipment Options: ', width/2, 500);
    text(equipc[0].desc, width/2, 520);
    text(equipc[1].desc, width/2, 540);
    text(equipc[2].desc, width/2, 560);
    text(equipc[3].desc, width/2, 580);
}