class World{
    
    character = new Character();
    enemies = [
       new JellyFish(),
       new JellyFish(),
       new JellyFish(),
    ];

    draw(){
        console.log('Drawing the world');
    }
}