namespace Template {


  export async function Start(): ƒS.SceneReturn {
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.black);
    await ƒS.update(1);


    ƒS.Sound.fade(sound.intro, 0.1, 0.25, true);




    await ƒS.Location.show(locations.white);
    await ƒS.update();
    await ƒS.Location.show(locations.blood01);
    await ƒS.update(0.1);
    ƒS.Sound.play(sound.shock0, 0.1, false);

    ƒS.Speech.show();
    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.intro.T0000);


    await ƒS.Location.show(locations.white);
    await ƒS.update();
    await ƒS.Location.show(locations.blood02);
    await ƒS.update(0.1);
    ƒS.Sound.play(sound.shock1, 0.13, false);



    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.intro.T0001);



    await ƒS.Location.show(locations.white);
    await ƒS.update();
    await ƒS.Location.show(locations.blood03);
    await ƒS.update(0.1);
    ƒS.Sound.play(sound.shock2, 0.17, false);



    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.intro.T0002);

    ƒS.Sound.fade(sound.intro, 0, 1);
    ƒS.Sound.fade(sound.title, 0.2, 0.1, false);
    await ƒS.Location.show(locations.white);
    await ƒS.update();
    await ƒS.Location.show(locations.blood04);
    await ƒS.update(0.1);
    ƒS.Sound.play(sound.shock3, 0.5, false);


    PlayTextSound();
    await ƒS.Speech.tell(characters.unknown, dialogues.unknown.intro.T0002);

    ƒS.Sound.play(sound.shock4, 0.3, false);






    await ƒS.Location.show(locations.white);
    await ƒS.update();
    await ƒS.Location.show(locations.blood05);
    await ƒS.update(0.1);


    ƒS.Speech.hide();
    ƒS.Speech.clear();

    await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
    await ƒS.Location.show(locations.white);
    await ƒS.update();
    await ƒS.Location.show(locations.bg_logo);
    await ƒS.update();
    await ƒS.Location.show(locations.white);
    await ƒS.update(0.25);
    await ƒS.Location.show(locations.bg_logo_blood2);
    await ƒS.update(3.5);

    ƒS.Sound.fade(sound.title, 0, 1);
    await ƒS.update(transition.wet.duration, transition.wet.alpha, transition.wet.edge);

    // Nächste Szene
    return Scene1();



  }

}
