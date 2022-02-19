declare namespace Template {
    let flashlight: boolean;
    function FlashLightStatus(status: boolean): void;
    function canContinue(): boolean;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    function IsPaused(): Promise<boolean>;
    function Pause(status: boolean): void;
    function SpawnGhost(): void;
    function DespawnGhost(): void;
    function PlayTextSound(): void;
    function PlayAnswerSound(): void;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
        turnUpVolume: string;
        turndownVolume: string;
        credits: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    function Credits(): void;
    let dataForSave: {};
    function start(_event: Event): void;
}
declare namespace Template {
    class ClickOption {
        item: ClickOption;
        image: string;
        text: string;
        posX: number;
        posY: number;
        removeOnClick: boolean;
        constructor(_item: any, x: number, y: number);
        createImage(): void;
        getClickText(): string;
    }
}
declare namespace Template {
    let minPoints: number;
    let maxPoints: number;
    let points: number;
    function UpdateBar(): Promise<void>;
    function DisplaySanityBar(show: boolean): void;
    function SetPoints(num: number): void;
    function AddPoints(num: number): void;
    function SubPoints(num: number): void;
    function GetPoints(): number;
}
declare namespace Template {
    function fromLefttoRight(): ƒS.AnimationDefinition;
    function fromToptoCenter(): ƒS.AnimationDefinition;
    function fromToplefttoTopcenter(): ƒS.AnimationDefinition;
    function leftToRight(): ƒS.AnimationDefinition;
    function rightToLeft(): ƒS.AnimationDefinition;
    function ExitToLeftt(): ƒS.AnimationDefinition;
    function OOBrightToLeft(): ƒS.AnimationDefinition;
    function OOBleftToRight(): ƒS.AnimationDefinition;
    function ExitToRight(): ƒS.AnimationDefinition;
    function ExitLeftToLeft(): ƒS.AnimationDefinition;
    function ExitRightToRight(): ƒS.AnimationDefinition;
    function fadeInLeft(): ƒS.AnimationDefinition;
    function fadeInRight(): ƒS.AnimationDefinition;
    function flyLeftRight(): ƒS.AnimationDefinition;
    function flyRightLeft(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let characters: {
        narrator: {
            name: string;
        };
        unknown: {
            name: string;
        };
        taki: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                angry: string;
                sad: string;
                scared: string;
                none: string;
            };
        };
        rikka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                blushed: string;
                scared: string;
                sad: string;
                happy: string;
                none: string;
            };
        };
        tetsuya: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                scared: string;
                happy: string;
                none: string;
            };
        };
        ghost: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                noface: string;
                face: string;
            };
        };
        ghostlady: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
}
declare namespace Template {
    let dialogues: {
        narrator: {
            tutorial: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
            };
            scene1: {
                T0000: string;
                T0001: string;
            };
            scene3: {
                T0000: string;
            };
            scene7: {
                T0000: string;
            };
        };
        unknown: {
            intro: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            scene6: {
                T0000: string;
                T0001: string;
            };
            scene7: {
                T0000: string;
            };
            scene8: {
                T0000: string;
            };
            scene9: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
            };
        };
        tetsuya: {
            scene6: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
            };
            scene7: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
            };
            scene8: {
                T0000: string;
            };
        };
        taki: {
            scene1: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
            };
            scene2: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            scene3: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
            };
            scene4: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
            };
            scene5: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
            };
            scene6: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
            };
            scene7: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
            };
            scene8: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            scene9: {
                T0000: string;
                T0001: string;
            };
            scene10: {
                T0000: string;
            };
            scene11: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            ending1: {
                T0000: string;
            };
            ending2: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            ending3: {
                T0000: string;
            };
        };
        rikka: {
            scene9: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            scene10: {
                T0000: string;
            };
        };
    };
}
declare namespace Template {
    let interactables: {
        item1: {
            name: string;
            origin: ƒ.ORIGIN2D;
            img: string;
            text: string;
            removeOnClick: boolean;
            interactable: boolean;
            pose: {
                normal: string;
            };
            posX: number;
            posY: number;
            sizeX: string;
            sizeY: string;
        };
    };
}
declare namespace Template {
    let locations: {
        black: {
            name: string;
            background: string;
        };
        white: {
            name: string;
            background: string;
        };
        bg_logo: {
            name: string;
            background: string;
        };
        bg_logo_blood: {
            name: string;
            background: string;
        };
        bg_logo_blood2: {
            name: string;
            background: string;
        };
        logo_animated: {
            name: string;
            background: string;
        };
        tutorial01: {
            name: string;
            background: string;
        };
        tutorial02: {
            name: string;
            background: string;
        };
        blood01: {
            name: string;
            background: string;
        };
        blood02: {
            name: string;
            background: string;
        };
        blood03: {
            name: string;
            background: string;
        };
        blood04: {
            name: string;
            background: string;
        };
        blood05: {
            name: string;
            background: string;
        };
        bedroom_day: {
            name: string;
            background: string;
        };
        outside: {
            name: string;
            background: string;
        };
        outsideschool: {
            name: string;
            background: string;
        };
        park: {
            name: string;
            background: string;
        };
        outsideschool2: {
            name: string;
            background: string;
        };
        classroom_day: {
            name: string;
            background: string;
        };
        classroom_night: {
            name: string;
            background: string;
        };
        classroom_night2: {
            name: string;
            background: string;
        };
        ghost01: {
            name: string;
            background: string;
        };
        ghost02: {
            name: string;
            background: string;
        };
        ghost03: {
            name: string;
            background: string;
        };
        ending1: {
            name: string;
            background: string;
        };
        ending2: {
            name: string;
            background: string;
        };
        ending3: {
            name: string;
            background: string;
        };
        bgghost: {
            name: string;
            background: string;
        };
        parknight: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let answerOptions: {
        skipTutorial: {
            selectA: string;
            selectB: string;
        };
        tutorial: {
            selectA: string;
            selectB: string;
        };
        scene7: {
            selectA: string;
            selectB: string;
        };
        scene10: {
            selectA: string;
            selectB: string;
        };
        lastsave: {
            selectA: string;
            selectB: string;
        };
    };
}
declare namespace Template {
    let sound: {
        intro: string;
        textbox: string;
        answer: string;
        click: string;
        shock0: string;
        shock1: string;
        shock2: string;
        shock3: string;
        shock4: string;
        title: string;
        sanity: string;
        ghostappear: string;
        bgtheme1: string;
        creepytheme1: string;
        woosh: string;
        ghostappear2: string;
        ghostappear3: string;
        attack: string;
    };
}
declare namespace Template {
    let transition: {
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        diagonalfade: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Template {
    function Ending1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ending2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ending3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene10(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene11(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene4(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene5(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene6(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene7(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene8(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene9(): ƒS.SceneReturn;
}
declare namespace Template {
    function Start(): ƒS.SceneReturn;
}
declare namespace Template {
    function Tutorial(): ƒS.SceneReturn;
}
