class OverworldMaping {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.overworld = null;
    this.walls = config.walls || {};
    this.doors = config.doors || {};
    this.triggers = config.triggers || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.doorImage = new Image();
    this.doorImage.src = config.doorsSrc;
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

  drawDoorImage(ctx, cameraPerson){
    ctx.drawImage(
      this.doorImage, 
      0,0,
      32,32,
      utils.withGrid(8) - cameraPerson.x, 
      utils.withGrid(12) - cameraPerson.y, 
      32,32,
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
}


