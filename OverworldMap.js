class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(7) - cameraPerson.x,
      utils.withGrid(10) - cameraPerson.y
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(7) - cameraPerson.x,
      utils.withGrid(10) - cameraPerson.y
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.values(this.gameObjects).forEach(o => {
      o.mount(this);
    })
  }

  addWall(x,y){
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x,y){
    delete this.walls[`${x},${y}`];
  }

  moveWall(wasX, wasY, direction){
    this.removeWall(wasX, wasY);
    const {x,y} = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x,y);
  }
}

window.OverworldMaps = {
  HouseStairs: {
    lowerSrc: "/sprites/places/house-stairs-orig.png",
    upperSrc: "/sprites/places/house-stairs-orig-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(6),
        y: utils.withGrid(6),
        src: "/sprites/chars/sunny.png",
      }),
    },
    walls: {
      // "32,32" : true
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(1, 6)]: true,
    },
  },

  SunnyRoom: {
    lowerSrc: "/sprites/places/SunnyRoom.png",
    upperSrc: "sprites/places/SunnyRoom-layout.png",
    gameObjects: {
      Sunny: new GameObject({
        x: utils.withGrid(5),
        y: utils.withGrid(6),
        src: "/sprites/chars/sunny.png",
      }),
    },
  },
};
