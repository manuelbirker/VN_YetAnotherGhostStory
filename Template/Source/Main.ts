namespace Template {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;


  let pause: boolean;

  export async function IsPaused(): Promise<boolean> {


    if (!pause) {
      return pause;
    }


    return IsPaused();
  }


  export function Pause(status: boolean) {

    pause = status;

  }



  export function SpawnGhost() {
    var element = document.getElementById("ghost1");
    element.classList.add("active");
  }

  export function DespawnGhost() {
    var element = document.getElementById("ghost1");
    element.classList.remove("active");
  }



  export function PlayTextSound() {
    ƒS.Sound.play(sound.textbox, 0.5, false);

  }

  export function PlayAnswerSound() {
    ƒS.Sound.play(sound.answer, 0.035, false);

  }

  // MENU - create Menu with buttons
  let gameMenu: ƒS.Menu;


  //  MENU - Audio functions

  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume >= 10) {
      return;
    }

    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0) {
      return;
    }

    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Hier könnten jetzt Credits stehen.");

    // showCredits();
  }

  export let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    turnUpVolume: "+",
    turndownVolume: "-",
    credits: "Credits",
    about: "Controls",
  };


  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
      case inGameMenu.credits:
        // CREDIT SCENE
        break;
      case inGameMenu.turnUpVolume:
        incrementSound();
        break;
      case inGameMenu.turndownVolume:
        decrementSound();
    }
  }


  let menu: boolean = true;
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:

        if (menu) {

          gameMenu.close();
          menu = false;
        }
        else {
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }



  export let dataForSave = {

  };

  window.addEventListener("load", start);


  export function start(_event: Event): void {
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");


    // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
    let scenes: ƒS.Scenes = [
      { id: "Scene6", scene: Scene6, name: "Scene6 Scene" },
      { id: "Scene5", scene: Scene5, name: "Scene5 Scene" },
      { id: "Scene1", scene: Scene1, name: "Scene1 Scene" },
      { id: "Tutorial", scene: Tutorial, name: "Tutorial Scene" },
      { id: "Start", scene: Start, name: "Start Scene" },
      { id: "Scene2", scene: Scene2, name: "Scene2 Scene" },
      { id: "Scene3", scene: Scene3, name: "Scene3 Scene" },
      { id: "Scene4", scene: Scene4, name: "Scene3 Scene" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}