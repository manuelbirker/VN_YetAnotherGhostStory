namespace Template {


  export async function Scene7(): ƒS.SceneReturn {


    await ƒS.Location.show(locations.classroom_night2);
    await ƒS.update(0.15);

    await ƒS.Character.show(characters.tetsuya, characters.tetsuya.pose.normal, ƒS.positionPercent(85, 100));
    await ƒS.update(0.5);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);

    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene7.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene7.T0001);

    // CREEPY SOUND
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0002);
    //tetsuya scared
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene7.T0002);
    // Creepy sound
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0003);
    //taki scared
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0004);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.scene7.T0000);
    PlayTextSound();
  
    await ƒS.Location.show(locations.black);
    await ƒS.Character.hide(characters.tetsuya);
    await ƒS.Character.hide(characters.taki);
    await ƒS.update(1);


    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene7.T0005);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
   
    FlashLightStatus(false);

    await ƒS.Location.show(locations.ghost01);
    await ƒS.update(0.2);
    await ƒS.Location.show(locations.black);
    await ƒS.update(1);
    AddPoints(5);
    FlashLightStatus(true);
    ƒS.Sound.play(sound.ghostappear, 0.1, false);

    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0006);
    await ƒS.Location.show(locations.ghost03);
    await ƒS.update(1);
    await ƒS.Location.show(locations.black);
    await ƒS.update(0.3);
    AddPoints(5);
    await ƒS.Location.show(locations.ghost02);
    await ƒS.update(1);
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene7.T0007);
    AddPoints(10);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene7.T0006);
    await ƒS.update(0.15);
    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.scene7.T0000);
 




    await ƒS.update(1);
    return Scene8();









  }

}
