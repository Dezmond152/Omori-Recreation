class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.currentAnimation = "idle-down";
    this.currentAnimationFrame = 0;
    this.animationFrameLimit = 10;
    this.animationFrameProgress = this.animationFrameLimit;
    this.gameObject = config.gameObject;
    
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.animations = config.animations || {
      "idle-down" : [[1, 0]],
      "idle-left" : [[1, 1]],
      "idle-right": [[1, 2]],
      "idle-up"   : [[1, 3]],
      "walk-down" : [[0, 0],[1, 0],[2, 0],[1, 0]],
      "walk-left" : [[0, 1],[1, 1],[2, 1],[1, 1]],
      "walk-right": [[0, 2],[1, 2],[2, 2],[1, 2]],
      "walk-up"   : [[0, 3],[1, 3],[2, 3],[1, 3]],
    };
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame == undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx, cameraPerson) {
    const x = this.gameObject.x + utils.withGrid(7) - cameraPerson.x;
    const y = this.gameObject.y - 6 + utils.withGrid(10) - cameraPerson.y;

    const [fremeX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, 
        fremeX * 32, 
        frameY * 32, 
        32, 
        32, 
        x, 
        y, 
        32, 
        32
      );

    this.updateAnimationProgress();
  }
}
