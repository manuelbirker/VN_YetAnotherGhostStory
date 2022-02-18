namespace Template {


  export async function Scene4(): ƒS.SceneReturn {
    DisplaySanityBar(false);
    FlashLightStatus(false);

    await ƒS.Location.show(locations.outsideschool);
    await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);


    ƒS.Speech.show();

    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene4.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene4.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene4.T0002);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene4.T0003);


    await ƒS.Character.hide(characters.taki);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.update(1);
    
    return Scene5();

  }

}
