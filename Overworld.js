class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const image = new Image();
    image.onload = () => {
        this.ctx.drawImage(image,0,0);
    };
    image.src = '/sprites/places/house-stairs-orig.png';
    
    //Добавляю обьекты
    const Sunny = new GameObject({
        x: 5,
        y: 6,
        src: '/sprites/chars/sunny.png'
    })

    const Sunny2 = new GameObject({
        x: 6,
        y: 7,
        src: '/sprites/chars/sunny.png'
    })


    setTimeout(() => {
        Sunny.sprite.draw(this.ctx);
        Sunny2.sprite.draw(this.ctx);
    }, 200)
  }
}
