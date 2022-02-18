namespace Template {


    export async function Ending2(): ƒS.SceneReturn {
        DisplaySanityBar(false);
        FlashLightStatus(false);
        ƒS.Character.hideAll();



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


        ƒS.Text.print("This is the true ending. Thanks for playing.");

    }
}