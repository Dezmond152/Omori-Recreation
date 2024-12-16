class Sprite{
    constructor(config){

        //Cоздание картинки
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Конфигурация анимаций и точка инициации
        this.animations = config.animations || {
            idleDown: [
                [32,0]
            ]
        }

        this.currentAnimation = config.currentAnimation || "idleDown"
        this.currentAnimationFrame = 0;

        //Отсылаясь к игровому оббекту
        this.gameObject = config.gameObject;
    }

    draw(ctx){
        const x = this.gameObject.x * 32;
        const y = this.gameObject.y * 32 - 6;

        this.isLoaded && ctx.drawImage(this.image,
            32,0,
            32,32,
            x,y,
            32,32,
        )
    }
}