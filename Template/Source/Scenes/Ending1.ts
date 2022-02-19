namespace Template {


    export async function Ending1(): ƒS.SceneReturn {
        SetPoints(0);
        DisplaySanityBar(false);
        FlashLightStatus(false);
        ƒS.Character.hideAll();

        ƒS.Sound.fade(sound.creepytheme1, 0, 0.1, false);

        ƒS.Sound.fade(sound.title, 0.2, 0.1, false);

        await ƒS.Location.show(locations.ending3);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);



        PlayAnswerSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.ending3.T0000);
        await ƒS.Speech.hide();



        PlayAnswerSound();
        ƒS.Text.print("This is one of the two Bad Endings. Do you want to load the last autosave?");
        let dialogue1 = await ƒS.Menu.getInput(answerOptions.lastsave, "class");

        switch (dialogue1) {
            case answerOptions.lastsave.selectA:

                await ƒS.update(1);
                return Scene7();

                break;
            case answerOptions.lastsave.selectB:
                PlayAnswerSound();
                PlayTextSound();

                window.location.reload();



                break;
        }

 





















    }



}

  