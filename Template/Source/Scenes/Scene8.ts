namespace Template {


  export async function Scene8(): ƒS.SceneReturn {


    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.scene8.T0000);



    let dialogue1 = await ƒS.Menu.getInput(answerOptions.scene7, "class");

    switch (dialogue1) {
      case answerOptions.scene7.selectA:     ƒS.Sound.play(sound.shock0, 0.2, false);
        PlayAnswerSound();
        PlayTextSound();
        AddPoints(20);
        await ƒS.Speech.tell(characters.taki, dialogues.taki.scene8.T0000);
        await ƒS.Speech.tell(characters.taki, dialogues.taki.scene8.T0001);
        await ƒS.Speech.tell(characters.tetsuya, dialogues.tetsuya.scene8.T0000);
        await ƒS.Speech.tell(characters.taki, dialogues.taki.scene8.T0002);
   
        if (points >= maxPoints) {

          return Ending3();
        }

        await ƒS.update(1);
        return Scene8();

        break;
      case answerOptions.scene7.selectB:
        PlayAnswerSound();
        PlayTextSound();

        await ƒS.update(1);
        return Scene9();



        break;
    }









  }
}