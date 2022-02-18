namespace Template {


    export function fromLefttoRight(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.bottomleft },
            end: { translation: ƒS.positions.bottomright },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function fromToptoCenter(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.topcenter },
            end: { translation: ƒS.positions.center },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function fromToplefttoTopcenter(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.topleft },
            end: { translation: ƒS.positions.topcenter },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function leftToRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100),
          },
          end: {
            translation: ƒS.positionPercent(70, 100),
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
    
      export function rightToLeft(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(70, 100),
          },
          end: {
            translation: ƒS.positionPercent(20, 100),
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
    
      export function ExitToLeftt(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(20, 100),
          },
          end: {
            translation: ƒS.positionPercent(-40, 100),
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
    
      export function OOBrightToLeft(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(140, 100),
          },
          end: {
            translation: ƒS.positionPercent(35, 100),
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
    
      export function OOBleftToRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(-45, 100),
          },
          end: {
            translation: ƒS.positionPercent(65, 100),
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
    
      export function ExitToRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(70, 100),
          },
          end: {
            translation: ƒS.positionPercent(120, 100),
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }


      export function ExitLeftToLeft(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(-70, 100),
          },
          end: {
            translation: ƒS.positionPercent(15, 100),
          },
          duration: 0.1,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }



      export function ExitRightToRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(120, 100),
          },
          end: {
            translation: ƒS.positionPercent(85, 100),
          },
          duration: 0.1,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
      

      export function fadeInLeft(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(15, 100),
          },
          end: {
            translation: ƒS.positionPercent(15, 100),
          },
          duration: 0.3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }

      export function fadeInRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(85, 100),
          },
          end: {
            translation: ƒS.positionPercent(85, 100),
          },
          duration: 0.3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }



      export function flyLeftRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(-25, 100),
          },
          end: {
            translation: ƒS.positionPercent(125, 100),
          },
          duration: 0.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }

      
      export function flyRightLeft(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(125, 100),
          },
          end: {
            translation: ƒS.positionPercent(-25, 100),
          },
          duration: 0.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }

}