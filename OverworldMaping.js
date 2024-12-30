class OverworldMaping {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.triggers = config.triggers || {};

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

  
  onStepTrigger(mapName, newCords) {

  }
 
  
  

  onPressTrigger() {
    console.log("You pressed trigger");
  }

  checkTrigger(playerX, playerY, trigger) {
    const playerCord = `${playerX},${playerY}`;

    if (this.triggers[playerCord]?.includes(trigger)) {
      const [trigger, mapName, newCords] = this.triggers[playerCord];
      this.activateTrigger(trigger, mapName, newCords);
    }
  }

  activateTrigger(trigger, mapName, newCords) {
    if(trigger === "onStepTrigger") {
      this.onStepTrigger(mapName, newCords);
    }


    // если приходит onPressTrigger
    // 
    // 
    // if(trigger === "onPressTrigger") {
    // }
  }


}


