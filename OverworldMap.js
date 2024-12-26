class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.triggers = config.triggers || {};
    this.trigerActive = false;

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
    Object.values(this.gameObjects).forEach((o) => {
      o.mount(this);
    });
  }

  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x, y) {
    delete this.walls[`${x},${y}`];
  }

  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const { x, y } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }

  onStepTrigger() {
    console.log("You steped on trigger");
  }

  onPressTrigger() {
    console.log("You pressed trigger");
  }

  checkTrigger(playerX, playerY, trigger) {
    const playerCord = `${playerX},${playerY}`;

    if (this.triggers[playerCord] === trigger) {
      this.activateTrigger(trigger);
    }
  }

  activateTrigger(triggerType) {
    if (typeof this[triggerType] === 'function') {
      this[triggerType]();
    }
  }
}


window.OverworldMaps = {
  HouseStairs: {
    lowerSrc: "./sprites/places/house-stairs-orig.png",
    upperSrc: "./sprites/places/house-stairs-orig-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(6),
        y: utils.withGrid(6),
        src: "./sprites/chars/sunny.png",
      }),
    },
    walls: {
      [utils.asGridCord(0, 3)]: true,
      [utils.asGridCord(1, 3)]: true,
      [utils.asGridCord(2, 3)]: true,
      [utils.asGridCord(3, 3)]: true,
      [utils.asGridCord(4, 3)]: true,
      [utils.asGridCord(5, 3)]: true,
      [utils.asGridCord(6, 3)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(8, 3)]: true,
      [utils.asGridCord(9, 3)]: true,
      [utils.asGridCord(10, 3)]: true,
      [utils.asGridCord(11, 3)]: true,
      [utils.asGridCord(12, 4)]: true,
      [utils.asGridCord(12, 5)]: true,
      [utils.asGridCord(13, 6)]: true,
      [utils.asGridCord(13, 7)]: true,
      [utils.asGridCord(12, 8)]: true,
      [utils.asGridCord(11, 8)]: true,
      [utils.asGridCord(10, 8)]: true,
      [utils.asGridCord(9, 8)]: true,
      [utils.asGridCord(8, 8)]: true,
      [utils.asGridCord(7, 8)]: true,
      [utils.asGridCord(7, 9)]: true,
      [utils.asGridCord(7, 10)]: true,
      [utils.asGridCord(7, 11)]: true,
      [utils.asGridCord(7, 12)]: true,
      [utils.asGridCord(8, 11)]: true,
      [utils.asGridCord(9, 11)]: true,
      [utils.asGridCord(10, 11)]: true,
      [utils.asGridCord(11, 11)]: true,
      [utils.asGridCord(12, 12)]: true,
      [utils.asGridCord(13, 13)]: true,
      [utils.asGridCord(12, 14)]: true,
      [utils.asGridCord(11, 14)]: true,
      [utils.asGridCord(10, 15)]: true,
      [utils.asGridCord(9, 15)]: true,
      [utils.asGridCord(8, 15)]: true,
      [utils.asGridCord(7, 15)]: true,
      [utils.asGridCord(6, 16)]: true,
      [utils.asGridCord(5, 15)]: true,
      [utils.asGridCord(4, 15)]: true,
      [utils.asGridCord(3, 15)]: true,
      [utils.asGridCord(0, 14)]: true,
      [utils.asGridCord(1, 14)]: true,
      [utils.asGridCord(2, 14)]: true,
      [utils.asGridCord(-1, 13)]: true,
      [utils.asGridCord(0, 12)]: true,
      [utils.asGridCord(1, 11)]: true,
      [utils.asGridCord(2, 11)]: true,
      [utils.asGridCord(3, 11)]: true,
      [utils.asGridCord(4, 11)]: true,
      [utils.asGridCord(5, 12)]: true,
      [utils.asGridCord(5, 11)]: true,
      [utils.asGridCord(5, 10)]: true,
      [utils.asGridCord(5, 9)]: true,
      [utils.asGridCord(5, 8)]: true,
      [utils.asGridCord(4, 8)]: true,
      [utils.asGridCord(3, 8)]: true,
      [utils.asGridCord(2, 8)]: true,
      [utils.asGridCord(1, 8)]: true,
      [utils.asGridCord(0, 8)]: true,
      [utils.asGridCord(-1, 7)]: true,
      [utils.asGridCord(1, 6)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(-1, 4)]: true,
    },
  },

  SunnyRoom: {
    lowerSrc: "./sprites/places/SunnyRoom.png",
    upperSrc: "./sprites/places/SunnyRoom-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
      }),
    },

    triggers: {
      [utils.asGridCord(1, 7)]: 'onStepTrigger',
      [utils.asGridCord(3, 2)]: 'onPressTrigger',
    },

    walls: {
      [utils.asGridCord(0, 2)]: true,
      [utils.asGridCord(1, 2)]: true,
      [utils.asGridCord(2, 2)]: true,
      [utils.asGridCord(3, 2)]: true,
      [utils.asGridCord(4, 2)]: true,
      [utils.asGridCord(5, 3)]: true,
      [utils.asGridCord(6, 2)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(7, 4)]: true,
      [utils.asGridCord(7, 5)]: true,
      [utils.asGridCord(6, 6)]: true,
      [utils.asGridCord(5, 7)]: true,
      [utils.asGridCord(4, 6)]: true,
      [utils.asGridCord(3, 6)]: true,
      [utils.asGridCord(2, 6)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 8)]: true,
      [utils.asGridCord(0, 7)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(0, 4)]: true,
      [utils.asGridCord(-1, 3)]: true,
    },
  },
};
