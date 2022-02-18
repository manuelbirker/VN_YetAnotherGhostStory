
namespace Template {

    export class ClickOption {
        item: ClickOption;
        image: string;
        text: string;
        posX: number;
        posY: number;
        removeOnClick: boolean;

        constructor(_item: any, x: number, y: number) {
            this.image = _item.img;
            this.text = _item.text;
            this.posX = x;
            this.posX = y;
            this.removeOnClick = _item.removeOnClick;
        }


        createImage() {

       
        }

        getClickText(): string {

            return this.text;
        }


    }




}