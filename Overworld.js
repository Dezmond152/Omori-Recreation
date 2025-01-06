class Overworld {
  constructor(config) {
    this.overworld = null;
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map,
        });
      });


      const cameraPerson = this.map.gameObjects.Sunny;


      this.map.drawLowerImage(this.ctx, cameraPerson);

      Object.values(this.map.gameObjects).forEach((object) => {
        object.sprite.draw(this.ctx, cameraPerson);
      });


      this.map.drawUpperImage(this.ctx, cameraPerson);

  

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  startMap(mapConfig) {
    
    this.map = new OverworldMaping(mapConfig);
    this.map.overworld = this;     
  }

  startTriggers() {
    this.TriggersInit = new TriggersInit({ map: this.map });
  }

  startDirectionInput() {
    this.directionInput = new DirectionInput();
    this.directionInput.init({ map: this.map });
  }

  darkenScreen() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  init() {
    this.startMap(window.MapsConfig.SunnyRoom);
    this.startTriggers();
    this.startDirectionInput();
    this.startGameLoop();
  }
}

