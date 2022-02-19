namespace Template {


    export async function Ending1(): ƒS.SceneReturn {
        DisplaySanityBar(false);
        FlashLightStatus(false);
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.title, 0.2, 0.1, false);

        await ƒS.Location.show(locations.ending1);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);








        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.ending1.T0000);
        
        SetPoints(0);
    

        ƒS.Text.print("This is one of the two bad endings. Do you want to load the last autosave?");
        let dialogue1 = await ƒS.Menu.getInput(answerOptions.lastsave, "class");

        switch (dialogue1) {
            case answerOptions.lastsave.selectA:



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

  