namespace Template {


  export async function Scene3(): ƒS.SceneReturn {
    DisplaySanityBar(false);
    FlashLightStatus(false);

    await ƒS.Location.show(locations.park);
    await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);


    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene3.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene3.T0001);

    ƒS.Character.animate(characters.ghost, characters.ghost.pose.noface, flyLeftRight());
    ƒS.Sound.play(sound.woosh, 0.5, false);
    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.scared, ƒS.positionPercent(15, 100));

    await ƒS.update();
    // sound

    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene3.T0002);
    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));

    ƒS.Character.animate(characters.rikka, characters.rikka.pose.angry, flyLeftRight());
    ƒS.Sound.play(sound.woosh, 0.5, false);
    await ƒS.update();
    // sound

    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.scared, ƒS.positionPercent(15, 100));
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene3.T0003);
    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene3.T0004);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.scene3.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene3.T0005);


    await ƒS.Character.hide(characters.taki);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.update(1);
    return Scene4();

  }

}
