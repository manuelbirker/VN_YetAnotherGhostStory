namespace Template {


    // Punktesystem
    export let minPoints = 0;
    export let maxPoints = 100;
    export let points = 0;


    export function UpdateBar() {
        let progressbar = document.getElementById("sanity");

        progressbar.style.width = points + "%";


        if (points >= 85) {
            progressbar.style.backgroundColor = "red";

        } else if (points < 85 && points > 60) {
            progressbar.style.backgroundColor = "yellow";

        } else {
            progressbar.style.backgroundColor = "green";

        }


    }




    export function DisplaySanityBar(show: boolean) {


        let progressbar = document.getElementById("sanityContainer");



        if (!show) {
            progressbar.style.display = "none";
        } else {
            progressbar.style.display = "inline-block";
        }


    }




    export function SetPoints(num: number) {

        points = num;


        UpdateBar();
    }

    export function AddPoints(num: number) {
        if (points < maxPoints) {
            points += num;
        }

        UpdateBar();
    }
    export function SubPoints(num: number) {
        if (points > 0) {
            points -= num;
        }
        UpdateBar();
    }
    export function GetPoints(): number {

        return points;
    }







}
