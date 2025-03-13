class MoveableObject {
    x = 120;
    y = 400;
    img;

//loadImage ('imag/test.png)
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