namespace Template {


  export async function Scene1(): ƒS.SceneReturn {


    ƒS.Speech.hide();

    await ƒS.Location.show(locations.bedroom_day);
    await ƒS.update(transition.diagonalfade.duration, transition.diagonalfade.alpha, transition.diagonalfade.edge);


    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);


    await ƒS.update(0);

    ƒS.Speech.show();
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene1.T0000);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene1.T0001);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene1.T0002);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene1.T0003);



    await ƒS.Location.show(locations.white);
    //TODO Image von Geist. + creepy Sound
    
    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.scared, ƒS.positionPercent(15, 100));
    await ƒS.update(0.2);

    
    await ƒS.Character.hide(characters.taki);
    await ƒS.Character.show(characters.taki, characters.taki.pose.normal, ƒS.positionPercent(15, 100));
    await ƒS.Location.show(locations.bedroom_day);
    await ƒS.update(0.7);

    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene1.T0005);
    PlayTextSound();
    await ƒS.Speech.tell(characters.taki, dialogues.taki.scene1.T0006);

    await ƒS.Character.hide(characters.taki);
    ƒS.Speech.clear();
    ƒS.Speech.hide();



    await ƒS.update(1);
    return Scene2();




  }

}
