namespace Template {


  export async function Tutorial(): ƒS.SceneReturn {

    document.getElementById('close').blur();
    DisplaySanityBar(false);
    FlashLightStatus(false);
    ƒS.Character.hideAll();

   
    //TEST await ƒS.Interactable.show(interactables.item1, interactables.item1.pose.normal, new ƒ.Vector2(interactables.item1.posX, interactables.item1.posY));


    await ƒS.Location.show(locations.tutorial01);
    await ƒS.update(0.25);

    ƒS.Speech.show();

    PlayTextSound();

    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0000);

    let skipTutorial = await ƒS.Menu.getInput(answerOptions.skipTutorial, "class");

    switch (skipTutorial) {
      case answerOptions.skipTutorial.selectA:
        PlayAnswerSound();
        break;
      case answerOptions.skipTutorial.selectB:
        PlayAnswerSound();
        return Start();
        break;
    }


    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0002);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0003);







    let firstDialogueElement = await ƒS.Menu.getInput(answerOptions.tutorial, "class");

    switch (firstDialogueElement) {
      case answerOptions.tutorial.selectA:
        PlayAnswerSound();

        PlayTextSound();
        await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0004);
        break;
      case answerOptions.tutorial.selectB:
        PlayAnswerSound();

        PlayTextSound();
        await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0005);

        break;
    }


    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0006);


    DisplaySanityBar(true);
    await ƒS.Location.show(locations.tutorial02);
    await ƒS.update(1);

    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0007);

    AddPoints(20);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0008);

    AddPoints(50);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0009);

    AddPoints(50);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0010);

    SetPoints(0);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0011);
    SetPoints(0);

    DisplaySanityBar(false);
    await ƒS.Location.show(locations.tutorial01);
    await ƒS.update(1);



    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0013);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0014);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0015);
    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0016);


    PlayTextSound();
    await ƒS.Speech.tell(characters.narrator, dialogues.narrator.tutorial.T0012);





    ƒS.Speech.hide();
    ƒS.Speech.clear();

    // Nächste Szene
    return Start();




  }

}
