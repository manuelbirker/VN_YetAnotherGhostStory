namespace Template {


    export async function Ending3(): ƒS.SceneReturn {
        SetPoints(0);
        DisplaySanityBar(false);
        FlashLightStatus(false);
        ƒS.Character.hideAll();

        await ƒS.Location.show(locations.ending3);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);



        PlayAnswerSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.ending3.T0000);



        PlayAnswerSound();
        ƒS.Text.print("Do you want to load the last autosave?");
        let dialogue1 = await ƒS.Menu.getInput(answerOptions.lastsave, "class");

        switch (dialogue1) {
            case answerOptions.lastsave.selectA:

                await ƒS.update(1);
                return Scene7();

                break;
            case answerOptions.lastsave.selectB:
                PlayAnswerSound();
                PlayTextSound();


                await ƒS.update(1);
                return Tutorial();



                break;
        }






    }



}