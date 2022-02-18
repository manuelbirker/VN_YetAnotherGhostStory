namespace Template {


    export async function Scene10(): ƒS.SceneReturn {


        await ƒS.Location.show(locations.bgghost);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);





        PlayTextSound();


        let dialogue1 = await ƒS.Menu.getInput(answerOptions.scene10, "class");

        switch (dialogue1) {
            case answerOptions.scene10.selectA:
                PlayAnswerSound();
                PlayTextSound();
                AddPoints(20);
                await ƒS.Speech.tell(characters.rikka, dialogues.rikka.scene10.T0000);
                await ƒS.update(1);



                if (points >= maxPoints) {

                    return Ending3();
                }

                return Scene10();

                break;
            case answerOptions.scene10.selectB:
                PlayAnswerSound();
                PlayTextSound();


                await ƒS.Speech.tell(characters.taki, dialogues.taki.scene11.T0002);



                await ƒS.update(1);
                return Scene11();



                break;
        }






    }
}