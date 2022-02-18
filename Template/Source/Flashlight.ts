namespace Template {

    export let flashlight = false;

    export function FlashLightStatus(status: boolean) {
        flashlight = status;
        const light = document.getElementById("flashlight");

        if (!status) {
            light.style.display = "none";
        } else {
            light.style.display = "block";
        }


    }



    export function canContinue(): boolean{



        return false;
    }




}
