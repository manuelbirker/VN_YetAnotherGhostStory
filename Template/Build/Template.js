"use strict";
var Template;
(function (Template) {
    Template.flashlight = false;
    function FlashLightStatus(status) {
        Template.flashlight = status;
        const light = document.getElementById("flashlight");
        if (!status) {
            light.style.display = "none";
        }
        else {
            light.style.display = "block";
        }
    }
    Template.FlashLightStatus = FlashLightStatus;
    function canContinue() {
        return false;
    }
    Template.canContinue = canContinue;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    let pause;
    async function IsPaused() {
        if (!pause) {
            return pause;
        }
        return IsPaused();
    }
    Template.IsPaused = IsPaused;
    function Pause(status) {
        pause = status;
    }
    Template.Pause = Pause;
    function SpawnGhost() {
        var element = document.getElementById("ghost1");
        element.classList.add("active");
    }
    Template.SpawnGhost = SpawnGhost;
    function DespawnGhost() {
        var element = document.getElementById("ghost1");
        element.classList.remove("active");
    }
    Template.DespawnGhost = DespawnGhost;
    function PlayTextSound() {
        Template.ƒS.Sound.play(Template.sound.textbox, 0.5, false);
    }
    Template.PlayTextSound = PlayTextSound;
    function PlayAnswerSound() {
        Template.ƒS.Sound.play(Template.sound.answer, 0.035, false);
    }
    Template.PlayAnswerSound = PlayAnswerSound;
    // MENU - create Menu with buttons
    let gameMenu;
    //  MENU - Audio functions
    let volume = 1.0;
    function incrementSound() {
        if (volume >= 10) {
            return;
        }
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0) {
            return;
        }
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("Hier könnten jetzt Credits stehen.");
        // showCredits();
    }
    Template.showCredits = showCredits;
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turndownVolume: "-",
        credits: "Credits",
        about: "Controls",
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            case Template.inGameMenu.credits:
                // CREDIT SCENE
                break;
            case Template.inGameMenu.turnUpVolume:
                incrementSound();
                break;
            case Template.inGameMenu.turndownVolume:
                decrementSound();
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    let menu = true;
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu =
            Template.ƒS.Menu.create(Template.inGameMenu, buttonFunctionalities, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { id: "Scene6", scene: Template.Scene6, name: "Scene6 Scene" },
            { id: "Scene5", scene: Template.Scene5, name: "Scene5 Scene" },
            { id: "Scene1", scene: Template.Scene1, name: "Scene1 Scene" },
            { id: "Tutorial", scene: Template.Tutorial, name: "Tutorial Scene" },
            { id: "Start", scene: Template.Start, name: "Start Scene" },
            { id: "Scene2", scene: Template.Scene2, name: "Scene2 Scene" },
            { id: "Scene3", scene: Template.Scene3, name: "Scene3 Scene" },
            { id: "Scene4", scene: Template.Scene4, name: "Scene3 Scene" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    Template.start = start;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class ClickOption {
        item;
        image;
        text;
        posX;
        posY;
        removeOnClick;
        constructor(_item, x, y) {
            this.image = _item.img;
            this.text = _item.text;
            this.posX = x;
            this.posX = y;
            this.removeOnClick = _item.removeOnClick;
        }
        createImage() {
        }
        getClickText() {
            return this.text;
        }
    }
    Template.ClickOption = ClickOption;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Punktesystem
    Template.minPoints = 0;
    Template.maxPoints = 100;
    Template.points = 0;
    function UpdateBar() {
        let progressbar = document.getElementById("sanity");
        progressbar.style.width = Template.points + "%";
        if (Template.points >= 85) {
            progressbar.style.backgroundColor = "red";
        }
        else if (Template.points < 85 && Template.points > 60) {
            progressbar.style.backgroundColor = "yellow";
        }
        else {
            progressbar.style.backgroundColor = "green";
        }
    }
    Template.UpdateBar = UpdateBar;
    function DisplaySanityBar(show) {
        let progressbar = document.getElementById("sanityContainer");
        if (!show) {
            progressbar.style.display = "none";
        }
        else {
            progressbar.style.display = "inline-block";
        }
    }
    Template.DisplaySanityBar = DisplaySanityBar;
    function SetPoints(num) {
        Template.points = num;
        UpdateBar();
    }
    Template.SetPoints = SetPoints;
    function AddPoints(num) {
        if (Template.points < Template.maxPoints) {
            Template.points += num;
        }
        UpdateBar();
    }
    Template.AddPoints = AddPoints;
    function SubPoints(num) {
        if (Template.points > 0) {
            Template.points -= num;
        }
        UpdateBar();
    }
    Template.SubPoints = SubPoints;
    function GetPoints() {
        return Template.points;
    }
    Template.GetPoints = GetPoints;
})(Template || (Template = {}));
var Template;
(function (Template) {
    function fromLefttoRight() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positions.bottomright },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLefttoRight = fromLefttoRight;
    ;
    function fromToptoCenter() {
        return {
            start: { translation: Template.ƒS.positions.topcenter },
            end: { translation: Template.ƒS.positions.center },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromToptoCenter = fromToptoCenter;
    ;
    function fromToplefttoTopcenter() {
        return {
            start: { translation: Template.ƒS.positions.topleft },
            end: { translation: Template.ƒS.positions.topcenter },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromToplefttoTopcenter = fromToplefttoTopcenter;
    ;
    function leftToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(70, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.leftToRight = leftToRight;
    function rightToLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(20, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.rightToLeft = rightToLeft;
    function ExitToLeftt() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(20, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(-40, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.ExitToLeftt = ExitToLeftt;
    function OOBrightToLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(140, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(35, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.OOBrightToLeft = OOBrightToLeft;
    function OOBleftToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(-45, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(65, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.OOBleftToRight = OOBleftToRight;
    function ExitToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(120, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.ExitToRight = ExitToRight;
    function ExitLeftToLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(-70, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(15, 100),
            },
            duration: 0.1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.ExitLeftToLeft = ExitLeftToLeft;
    function ExitRightToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(120, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(85, 100),
            },
            duration: 0.1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.ExitRightToRight = ExitRightToRight;
    function fadeInLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(15, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(15, 100),
            },
            duration: 0.3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fadeInLeft = fadeInLeft;
    function fadeInRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(85, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(85, 100),
            },
            duration: 0.3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fadeInRight = fadeInRight;
    function flyLeftRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(-25, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(125, 100),
            },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.flyLeftRight = flyLeftRight;
    function flyRightLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(125, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(-25, 100),
            },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.flyRightLeft = flyRightLeft;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        narrator: {
            name: "",
        },
        unknown: {
            name: "???",
        },
        taki: {
            name: "Taki",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Taki/taki_neutral.png",
                happy: "./Images/Characters/Taki/taki_happy.png",
                angry: "./Images/Characters/Taki/taki_angry.png",
                sad: "./Images/Characters/Taki/taki_sad.png",
                scared: "./Images/Characters/Taki/taki_scared.png",
                none: "",
            },
        },
        rikka: {
            name: "Rikka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Rikka/rikka_neutral.png",
                angry: "./Images/Characters/Rikka/rikka_angry.png",
                blushed: "./Images/Characters/Rikka/rikka_blushed.png",
                scared: "./Images/Characters/Rikka/rikka_scared.png",
                sad: "./Images/Characters/Rikka/rikka_sad.png",
                happy: "./Images/Characters/Rikka/rikka_happy.png",
                none: "",
            },
        },
        tetsuya: {
            name: "Tetsua",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Tetsuya/tetsuya_normal.png",
                angry: "./Images/Characters/Tetsuya/tetsuya_angry.png",
                scared: "./Images/Characters/Tetsuya/tetsuya_scared.png",
                happy: "./Images/Characters/Tetsuya/tetsuya_happy.png",
                none: "",
            },
        },
        ghost: {
            name: "Ghost",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                noface: "./Images/Characters/Ghosts/ghost_faceless.png",
                face: "./Images/Characters/Ghosts/ghost_face.png",
            },
        },
        ghostlady: {
            name: "Ghost Lady",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Ghosts/ghost_lady.png",
            },
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.dialogues = {
        narrator: {
            tutorial: {
                T0000: "Welcome to <span style=\"color: red\"> Yet Another Ghost Story</span>. Do you want to play the tutorial? (You should check it out!)",
                T0001: "This is a short tutorial about how navigation works in this visual novel.",
                T0002: "Click anywhere to progress with the story.",
                T0003: "Great. From time to time you have to decide something like giving an answer.",
                T0004: "Good!",
                T0005: "Perfect!",
                T0006: "Okay. Lets Continue!",
                T0007: "Do you see this bar? This is your Sanity! If you encounter paranormal stuff, it will increase.",
                T0008: "As long as it's green, you don't have to worry.",
                T0009: "It's getting dangerous when it becomes yellow!",
                T0010: "Red is the most dangerous state. Your mind will start playing tricks on you. You will also faint if its 100% full.",
                T0011: "Okay okay, let's reset your sanity. Starting with such a high value wouldn't help you much, heh?",
                T0012: "Alright. These are all important controls you need to know right now. Let's begin. ",
                T0013: "The next important thing to know is the text color of this textbox.",
                T0014: "<span style=\"color: red\">RED TEXT</span> is important information",
                T0015: "<span style=\"color: blue\">BLUE TEXT</span> are the thoughts of the main charakter.",
                T0016: "WHITE TEXT like this means, someone is talking. Well right now it's just the game telling you how to play.",
            },
            scene1: {
                T0000: "<span style=\"color: red\"> RRRRING RRRINNNG RIIINNG </span>",
                T0001: "9:00",
            },
            scene3: {
                T0000: "No Answer.",
            }
        },
        unknown: {
            intro: {
                T0000: "Ghosts arent real, are they?",
                T0001: "Please tell me.. they aren't real?",
                T0002: "...",
            },
            scene6: {
                T0000: "Hey!!",
                T0001: "Hey you! Wake up!",
            },
        },
        tetsuya: {
            scene6: {
                T0000: "Aw, I'm glad you're okay. My name is <span style=\"color: red\"> Tetsuya </span>. I'm a student here at this school.",
                T0001: "Soon after I entered my classroom I felt a strange feeling in my guts. Then I fainted.",
                T0002: "I just found you here lying on the floor. You've lost your consciousness.",
            }
        },
        taki: {
            scene1: {
                T0000: "*Yawn*",
                T0001: "<span style=\"color: #2ACAEA\">Again this strange dream...</span>",
                T0002: "<span style=\"color: #2ACAEA\">Huh? What time is it?</span>",
                T0003: "<span style=\"color: #2ACAEA\">Woah. I totally overslept. And this is my first day at university.</span>",
                T0004: "<span style=\"color: #2ACAEA\">I have to Hurry!</span>",
                T0005: "<span style=\"color: #2ACAEA\">What was <span style=\"color: red\"> that?!</span> I really don't feel well but I can't miss the schools opening ceremony.</span>",
                T0006: "<span style=\"color: #2ACAEA\">...</span>!"
            },
            scene2: {
                T0000: "<span style=\"color: #2ACAEA\">The weather seems to be quite calm today.</span>",
                T0001: "<span style=\"color: #2ACAEA\">I'm glad that the school is only about 25 minutes away by foot.</span>",
                T0002: "<span style=\"color: #2ACAEA\">And there's a nice <span style=\"color: red\"> park</span> on the way to school.</span>",
            },
            scene3: {
                T0000: "<span style=\"color: #2ACAEA\">Here it is. The <span style=\"color: red\"> Yūreishizen Park</span>. Sadly I don't have time to explore it right now.</span>",
                T0001: "<span style=\"color: #2ACAEA\">The school should be around 5 minutes away from here.</span>",
                T0002: "<span style=\"color: #2ACAEA\">HUH?! What was that?</span>",
                T0003: "<span style=\"color: #2ACAEA\">Woah. What's going on.</span>",
                T0004: "<span style=\"color: white\">HEY!!</span>",
                T0005: "<span style=\"color: #2ACAEA\">Guess she didn't hear me. Whatever. I really have to go to school now and mind my own business.</span>",
            },
            scene4: {
                T0000: "<span style=\"color: #2ACAEA\">So for the next 3 years this will be my new school.</span>",
                T0001: "<span style=\"color: #2ACAEA\">I'm not as calm as I was some minutes ago.</span>",
                T0002: "<span style=\"color: #2ACAEA\">And it seems that there are <span style=\"color: red\"> no other students around</span>. I guess they're already in the <span style=\"color: red\"> auditorium</span> for the opening ceremony.</span>",
                T0003: "<span style=\"color: #2ACAEA\">I should hurry up.</span>",
            },
            scene5: {
                T0000: "<span style=\"color: #2ACAEA\">Huh.. there's nobody in my classroom?</span>",
                T0001: "Hello?",
                T0002: "Hellooooooooo?",
                T0003: "<span style=\"color: #2ACAEA\">That's strange..</span>",
                T0004: "<span style=\"color: #2ACAEA\">What is going on... ? I- .. I'm fainting...</span>",
                T0005: "<span style=\"color: #2ACAEA\">.</span>",
                T0006: "<span style=\"color: #2ACAEA\">...</span>",
                T0007: "<span style=\"color: #2ACAEA\">.....</span>",
            },
            scene6: {
                T0000: "Wh.. what happened?!",
                T0001: "Who are you?",
                T0002: "<span style=\"color: #2ACAEA\">He's got the same school uniform. Guess he's also a student here at this school.</span>",
                T0003: "<span style=\"color: #2ACAEA\">I should turn on my phone cam.</span>",
                T0004: "Thank you for helping me. What happened?",
            },
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    //TODO Fudge Story Point and Click Module ?
    Template.interactables = {
        item1: {
            name: "item1",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            img: "./Images/Items/alarm.jpg",
            text: "test123",
            removeOnClick: true,
            interactable: false,
            pose: {
                normal: "./Images/Items/alarm.jpg",
            },
            posX: 0,
            posY: 0,
            sizeX: "250",
            sizeY: "250",
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        black: {
            name: "Black",
            background: "./Images/Backgrounds/black.png"
        },
        white: {
            name: "White",
            background: "./Images/Backgrounds/white.png"
        },
        bg_logo: {
            name: "Logo w/ BG",
            background: "./Images/Backgrounds/bg_logo.png"
        },
        bg_logo_blood: {
            name: "Logo w/ BG and Blood",
            background: "./Images/Backgrounds/bg_logo_blood.png"
        },
        bg_logo_blood2: {
            name: "Logo 2 w/ BG and Blood",
            background: "./Images/Backgrounds/bg_logo_blood2.png"
        },
        logo_animated: {
            name: "logo_animated",
            background: "./Images/Backgrounds/logo_animated.gif"
        },
        tutorial01: {
            name: "Tutorial 01",
            background: "./Images/Backgrounds/tutorial01.png"
        },
        tutorial02: {
            name: "Tutorial 02",
            background: "./Images/Backgrounds/tutorial02.png"
        },
        blood01: {
            name: "Blood 01",
            background: "./Images/Backgrounds/blood01.png"
        },
        blood02: {
            name: "Blood 02",
            background: "./Images/Backgrounds/blood02.png"
        },
        blood03: {
            name: "Blood 03",
            background: "./Images/Backgrounds/blood03.png"
        },
        blood04: {
            name: "Blood 04",
            background: "./Images/Backgrounds/blood04.png"
        },
        blood05: {
            name: "Blood 05",
            background: "./Images/Backgrounds/blood05.png"
        },
        bedroom_day: {
            name: "Bedroom Day",
            background: "./Images/Backgrounds/Bedroom_Day.png"
        },
        outside: {
            name: "Outside",
            background: "./Images/Backgrounds/Street_Spring_Day.png"
        },
        outsideschool: {
            name: "Outside School",
            background: "./Images/Backgrounds/noranekogames_school.png"
        },
        park: {
            name: "Outside School",
            background: "./Images/Backgrounds/park_no_fence_day.jpg",
        },
        outsideschool2: {
            name: "Outside School 2",
            background: "./Images/Backgrounds/School_Hallway_Day.png",
        },
        classroom_day: {
            name: "Classroom Day",
            background: "./Images/Backgrounds/classroom_03_day.jpg",
        },
        classroom_night: {
            name: "Classroom Night",
            background: "./Images/Backgrounds/classroom_03_night.jpg",
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.answerOptions = {
        skipTutorial: {
            selectA: "Yes! <span style=\"color: green\">(Play Tutorial)</span>",
            selectB: "No. <span style=\"color: red\">(Skip Tutorial)</span>",
        },
        tutorial: {
            selectA: "Okay.",
            selectB: "Got it!",
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    // define sound
    Template.sound = {
        intro: "Audio/intro.mp3",
        textbox: "Audio/textchange.mp3",
        answer: "Audio/answer.ogg",
        click: "",
        shock0: "Audio/shock0.mp3",
        shock1: "Audio/shock1.mp3",
        shock2: "Audio/shock2.mp3",
        shock3: "Audio/shock3.mp3",
        shock4: "Audio/shock4.mp3",
        title: "Audio/title.mp3",
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    // define transitions
    Template.transition = {
        swirl: {
            duration: 1.5,
            alpha: "./FreeTransitions/Others/009.jpg",
            edge: 1,
        },
        wet: {
            duration: 1.5,
            alpha: "./FreeTransitions/Others/wet.jpg",
            edge: 1
        },
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/Others/020.jpg",
            edge: 1
        },
        puzzle: {
            duration: 5,
            alpha: "./FreeTransitions/test.jpg",
            edge: 1,
        },
        diagonalfade: {
            duration: 1,
            alpha: "./FreeTransitions/Others/005.jpg",
            edge: 1
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene1() {
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.bedroom_day);
        await Template.ƒS.update(Template.transition.diagonalfade.duration, Template.transition.diagonalfade.alpha, Template.transition.diagonalfade.edge);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.update(0);
        Template.ƒS.Speech.show();
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene1.T0003);
        await Template.ƒS.Location.show(Template.locations.white);
        //TODO Image von Geist. + creepy Sound
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.scared, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.Location.show(Template.locations.bedroom_day);
        await Template.ƒS.update(0.7);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene1.T0006);
        await Template.ƒS.Character.hide(Template.characters.taki);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        return Template.Scene2();
    }
    Template.Scene1 = Scene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene2() {
        await Template.ƒS.Location.show(Template.locations.outside);
        await Template.ƒS.update(Template.transition.diagonalfade.duration, Template.transition.diagonalfade.alpha, Template.transition.diagonalfade.edge);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.show();
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene2.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene2.T0001);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene2.T0002);
        await Template.ƒS.Character.hide(Template.characters.taki);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        return Template.Scene3();
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3() {
        await Template.ƒS.Location.show(Template.locations.park);
        await Template.ƒS.update(Template.transition.diagonalfade.duration, Template.transition.diagonalfade.alpha, Template.transition.diagonalfade.edge);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene3.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene3.T0001);
        Template.ƒS.Character.animate(Template.characters.ghost, Template.characters.ghost.pose.noface, Template.flyLeftRight());
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.scared, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update();
        // sound
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene3.T0002);
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        Template.ƒS.Character.animate(Template.characters.rikka, Template.characters.rikka.pose.angry, Template.flyLeftRight());
        await Template.ƒS.update();
        // sound
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.scared, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene3.T0003);
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene3.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.scene3.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene3.T0005);
        await Template.ƒS.Character.hide(Template.characters.taki);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        return Template.Scene4();
    }
    Template.Scene3 = Scene3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene4() {
        await Template.ƒS.Location.show(Template.locations.outsideschool);
        await Template.ƒS.update(Template.transition.diagonalfade.duration, Template.transition.diagonalfade.alpha, Template.transition.diagonalfade.edge);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.show();
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene4.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene4.T0001);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene4.T0002);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene4.T0003);
        await Template.ƒS.Character.hide(Template.characters.taki);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        return Template.Scene5();
    }
    Template.Scene4 = Scene4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene5() {
        await Template.ƒS.update(Template.transition.diagonalfade.duration, Template.transition.diagonalfade.alpha, Template.transition.diagonalfade.edge);
        await Template.ƒS.Location.show(Template.locations.classroom_day);
        await Template.ƒS.update(Template.transition.diagonalfade.duration, Template.transition.diagonalfade.alpha, Template.transition.diagonalfade.edge);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0001);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0002);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0003);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.classroom_day);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.classroom_day);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.classroom_night);
        await Template.ƒS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0004);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0005);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0006);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene5.T0007);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.15);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Character.hide(Template.characters.taki);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        return Template.Scene6();
    }
    Template.Scene5 = Scene5;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene6() {
        Template.DisplaySanityBar(false);
        Template.FlashLightStatus(false);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.dialogues.unknown.scene6.T0000);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.dialogues.unknown.scene6.T0001);
        Template.DisplaySanityBar(true);
        Template.AddPoints(10);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene6.T0000);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene6.T0001);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene6.T0002);
        Template.FlashLightStatus(true);
        await Template.ƒS.Location.show(Template.locations.classroom_night);
        await Template.ƒS.update(0.15);
        await Template.ƒS.Character.show(Template.characters.tetsuya, Template.characters.tetsuya.pose.normal, Template.ƒS.positionPercent(85, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.sad, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.taki, Template.dialogues.taki.scene6.T0003);
        await Template.ƒS.Character.hide(Template.characters.taki);
        await Template.ƒS.Character.show(Template.characters.taki, Template.characters.taki.pose.normal, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.hide(Template.characters.tetsuya);
        await Template.ƒS.Character.show(Template.characters.tetsuya, Template.characters.tetsuya.pose.happy, Template.ƒS.positionPercent(85, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.tetsuya, Template.dialogues.tetsuya.scene6.T0000);
        Template.SpawnGhost();
        Template.Pause(true);
        await Template.IsPaused();
        await Template.ƒS.Character.hide(Template.characters.tetsuya);
        await Template.ƒS.Character.hide(Template.characters.taki);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        // return Scene5();
    }
    Template.Scene6 = Scene6;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Start() {
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.intro, 0.1, 0.25, true);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.blood01);
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.shock0, 0.1, false);
        Template.ƒS.Speech.show();
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.dialogues.unknown.intro.T0000);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.blood02);
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.shock1, 0.13, false);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.dialogues.unknown.intro.T0001);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.blood03);
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.shock2, 0.17, false);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.dialogues.unknown.intro.T0002);
        Template.ƒS.Sound.fade(Template.sound.intro, 0, 1);
        Template.ƒS.Sound.fade(Template.sound.title, 0.2, 0.1, false);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.blood04);
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.shock3, 0.5, false);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.dialogues.unknown.intro.T0002);
        Template.ƒS.Sound.play(Template.sound.shock4, 0.3, false);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.blood05);
        await Template.ƒS.update(0.1);
        Template.ƒS.Speech.hide();
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.bg_logo);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(0.25);
        await Template.ƒS.Location.show(Template.locations.bg_logo_blood2);
        await Template.ƒS.update(3.5);
        Template.ƒS.Sound.fade(Template.sound.title, 0, 1);
        await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
        // Nächste Szene
        return Template.Scene1();
    }
    Template.Start = Start;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Tutorial() {
        document.getElementById('save').blur();
        Template.DisplaySanityBar(false);
        Template.FlashLightStatus(false);
        //TEST await ƒS.Interactable.show(interactables.item1, interactables.item1.pose.normal, new ƒ.Vector2(interactables.item1.posX, interactables.item1.posY));
        await Template.ƒS.Location.show(Template.locations.tutorial01);
        await Template.ƒS.update(0.25);
        Template.ƒS.Speech.show();
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0000);
        let skipTutorial = await Template.ƒS.Menu.getInput(Template.answerOptions.skipTutorial, "class");
        switch (skipTutorial) {
            case Template.answerOptions.skipTutorial.selectA:
                Template.PlayAnswerSound();
                break;
            case Template.answerOptions.skipTutorial.selectB:
                Template.PlayAnswerSound();
                return Template.Start();
                break;
        }
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0001);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0002);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0003);
        let firstDialogueElement = await Template.ƒS.Menu.getInput(Template.answerOptions.tutorial, "class");
        switch (firstDialogueElement) {
            case Template.answerOptions.tutorial.selectA:
                Template.PlayAnswerSound();
                Template.PlayTextSound();
                await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0004);
                break;
            case Template.answerOptions.tutorial.selectB:
                Template.PlayAnswerSound();
                Template.PlayTextSound();
                await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0005);
                break;
        }
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0006);
        Template.DisplaySanityBar(true);
        await Template.ƒS.Location.show(Template.locations.tutorial02);
        await Template.ƒS.update(1);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0007);
        Template.AddPoints(20);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0008);
        Template.AddPoints(50);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0009);
        Template.AddPoints(50);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0010);
        Template.SetPoints(0);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0011);
        Template.SetPoints(0);
        Template.DisplaySanityBar(false);
        await Template.ƒS.Location.show(Template.locations.tutorial01);
        await Template.ƒS.update(1);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0013);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0014);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0015);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0016);
        Template.PlayTextSound();
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dialogues.narrator.tutorial.T0012);
        Template.ƒS.Speech.hide();
        Template.ƒS.Speech.clear();
        // Nächste Szene
        return Template.Start();
    }
    Template.Tutorial = Tutorial;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map