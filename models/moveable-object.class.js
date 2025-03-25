class MoveableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 200;

    loadImg(imgPath) {
        this.img = new Image(); // this.img = document.getElementById('img');
        this.img.src = imgPath;
    }

    movingRight() {
        console.log('Moving right');
    }

    moveLeft() {
        console.log('Moving left');
    }
}