namespace Template {


    export async function Scene10(): ƒS.SceneReturn {

        ƒS.Sound.play(sound.ghostappear, 0.05, false);

        await ƒS.Location.show(locations.bgghost);
        await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);




        PlayTextSound();


        let dialogue1 = await ƒS.Menu.getInput(answerOptions.scene10, "class");

        switch (dialogue1) {
            case answerOptions.scene10.selectA: ƒS.Sound.play(sound.shock0, 0.2, false);
                PlayAnswerSound();
                PlayTextSound();
                AddPoints(20);
                await ƒS.Speech.tell(characters.rikka, dialogues.rikka.scene10.T0000);
                await ƒS.update(1);



                if (points >= maxPoints) {

                    return Ending1();
                }

                return Scene10();

                break;
            case answerOptions.scene10.selectB:
                PlayAnswerSound();
                PlayTextSound();

                await ƒS.Location.show(locations.black);
         
                await ƒS.update(0.2);
                ƒS.Sound.play(sound.attack, 0.01, false);
                await ƒS.Location.show(locations.white);
                await ƒS.update(0.3);
                await ƒS.Location.show(locations.black);
                await ƒS.update(0.4);
                ƒS.Sound.play(sound.attack, 0.02, false);
                await ƒS.Location.show(locations.white);
                await ƒS.update(0.5);
                await ƒS.Location.show(locations.black);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.taki, dialogues.taki.scene11.T0002);



                await ƒS.update(1);
                return Scene11();



                break;
        }






    }
}