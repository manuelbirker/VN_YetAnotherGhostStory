namespace Template {


  export async function Scene6(): ƒS.SceneReturn {

    DisplaySanityBar(false);
    FlashLightStatus(false);


    await ƒS.Location.show(locations.black);
    await ƒS.update(0.15);
    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.scene6.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.scene6.T0001);

    DisplaySanityBar(true);
    AddPoints(10);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0000);

  
    FlashLightStatus(true);
    await ƒS.Location.show(locations.classroom_night);
    await ƒS.update(0.15);

    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0003);

    await ƒS.Character.show(characters.tetsuya, characters.tetsuya.pose.normal, ƒS.positionPercent(85, 100));
    await ƒS.update(0.5);
    await ƒS.Character.show(characters.taki, characters.taki.pose.sad, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);

    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0002);

    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.2);


    await ƒS.Character.hide(characters.tetsuya);
    await ƒS.Character.show(characters.tetsuya, characters.tetsuya.pose.happy, ƒS.positionPercent(85, 100));
    await ƒS.update(0.2);

    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene6.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0000);


    await ƒS.Character.hide(characters.tetsuya);
    await ƒS.Character.show(characters.tetsuya, characters.tetsuya.pose.normal, ƒS.positionPercent(85, 100));
    await ƒS.update(0.2);
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene6.T0002);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0004);
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene6.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene6.T0003);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene6.T0005);
    // Battlesystem WIP
    //SpawnGhost();
    //Pause(true);
    // await IsPaused();

    await ƒS.Character.hide(characters.tetsuya);
    await ƒS.Character.hide(characters.taki);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.update(1);
     return Scene7();

  }

}
