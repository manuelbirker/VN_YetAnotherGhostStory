namespace Template {


    export async function Ending2(): ƒS.SceneReturn {
        ƒS.Sound.fade(sound.creepytheme1, 0, 0.1, false);
        DisplaySanityBar(false);
        FlashLightStatus(false);
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.title, 0.2, 0.1, false);



        SetPoints(0);
        DisplaySanityBar(false);
        FlashLightStatus(false);

        await ƒS.Location.show(locations.ending2);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);




        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.ending2.T0000);
        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.ending2.T0001);
        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.ending2.T0002);
        await ƒS.Speech.hide();

        ƒS.Text.print("<b>This is the true ending.</b> Thanks for playing. <br>Do you want to play again? There are 3 Endings to explore!");



        PlayAnswerSound();
        let dialogue1 = await ƒS.Menu.getInput(answerOptions.lastsave, "class");

        switch (dialogue1) {
            case answerOptions.lastsave.selectA:

                await ƒS.update(1);
                return Start();

                break;
            case answerOptions.lastsave.selectB:
                window.location.reload();

        }




    }
}