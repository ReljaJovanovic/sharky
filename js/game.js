let canvas;
let character = new Image();
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '/assets/img/1.Sharkie/1.IDLE/1.png';
    setTimeout( 2000);
    ctx.drawImage(character, 20, 20, 50, 150);

}
