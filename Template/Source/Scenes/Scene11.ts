namespace Template {


    export async function Scene11(): ƒS.SceneReturn {

        ƒS.Character.hideAll();



        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.scene10.T0000);


        DisplaySanityBar(false);
        FlashLightStatus(false);
        ƒS.Character.hideAll();


        await ƒS.Location.show(locations.parknight);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);



        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.scene11.T0000);
        PlayTextSound();
        await ƒS.Speech.tell(characters.taki, dialogues.taki.scene11.T0001);




        if (GetPoints() >= 80) {

            await ƒS.update(1);
            return Ending1();
        } else {
            await ƒS.update(2);
            return Ending2();

        }




    }
}