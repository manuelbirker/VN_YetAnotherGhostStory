namespace Template {


  export async function Scene5(): ƒS.SceneReturn {
    DisplaySanityBar(false);
    FlashLightStatus(false);
    await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);


    await ƒS.Location.show(locations.classroom_day);
    await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0002);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0003);

    await ƒS.Location.show(locations.white);
    await ƒS.update(0.15);
    await ƒS.Location.show(locations.black);
    await ƒS.update(0.15);
    await ƒS.Location.show(locations.classroom_day);
    await ƒS.update(0.15);
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0004);
    await ƒS.Location.show(locations.white);
    await ƒS.update(0.15);
    await ƒS.Location.show(locations.black);
    await ƒS.update(0.15);
    await ƒS.Location.show(locations.classroom_day);
    await ƒS.update(0.15);
    await ƒS.Location.show(locations.white);
    await ƒS.update(0.15);
    await ƒS.Location.show(locations.black);
    await ƒS.Character.hide(characters.taki);
    await ƒS.update(0.15);

    ƒS.Sound.fade(sound.bgtheme1, 0, 1);
    ƒS.Sound.fade(sound.creepytheme1, 0.2, 5, false);



    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0005);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0006);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene5.T0007);



    await ƒS.Character.hide(characters.taki);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.update(1);
     return Scene6();

  }

}
