namespace Template {


  export async function Scene2(): ƒS.SceneReturn {
    DisplaySanityBar(false);
    FlashLightStatus(false);

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


    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, "<span style=\"color: #2ACAEA\">Should i directly head to the school or should I take the route through the park?</span>");




    let parkornot = await ƒS.Menu.getInput(answerOptions.walkSelection, "class");

    switch (parkornot) {
      case answerOptions.walkSelection.selectA:
        PlayAnswerSound();
        await ƒS.Character.hide(characters.taki);
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        await ƒS.update(1);
        return Scene3();
        break;
      case answerOptions.walkSelection.selectB:
        PlayAnswerSound();
        await ƒS.Character.hide(characters.taki);
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        await ƒS.update(1);
        return Scene4();
        break;
    }

    await ƒS.update(0.5);







  }

}
