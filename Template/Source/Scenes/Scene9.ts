namespace Template {


  export async function Scene9(): ƒS.SceneReturn {



    await ƒS.Location.show(locations.white);
    await ƒS.update(0.5);
    await ƒS.Location.show(locations.ghost02);
    await ƒS.update(0.4);
    await ƒS.Location.show(locations.white);
    await ƒS.update(0.3);
    await ƒS.Location.show(locations.ghost02);
    await ƒS.update(0.2);
    await ƒS.Location.show(locations.white);
    await ƒS.update(0.1);
    await ƒS.Location.show(locations.black);
    await ƒS.update();
    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.scene9.T0002);

    await ƒS.Location.show(locations.classroom_night2);
    await ƒS.update(0.35);

    await ƒS.Character.show(characters.taki, characters.taki.pose.scared, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);

    await ƒS.Character.show(characters.rikka, characters.rikka.pose.normal, ƒS.positionPercent(85, 125));
    await ƒS.update(0.5);

    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.scene9.T0003);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene9.T0000);

    PlayTextSound();
    await ƒS.Speech.tell(characters.rikka, dialogues.rikka.scene9.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.rikka, dialogues.rikka.scene9.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene9.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.rikka, dialogues.rikka.scene9.T0002);



    await ƒS.update(1);
    return Scene10();



  }
}