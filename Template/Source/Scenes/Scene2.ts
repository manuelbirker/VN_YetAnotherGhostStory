namespace Template {


  export async function Scene2(): ƒS.SceneReturn {


    await ƒS.Location.show(locations.outside);
    await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);


    ƒS.Speech.show();

    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene2.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene2.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene2.T0002);

    await ƒS.Character.hide(characters.taki);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.update(1);
    return Scene3();

  }

}
