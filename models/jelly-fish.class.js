class JellyFish extends MoveableObject {
    constructor() {
        super().loadImg('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.x = Math.random() * 500 + 200;
        this.height = 100;
        this.width = 100;
    
    }


}