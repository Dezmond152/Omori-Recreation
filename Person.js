class Person extends GameObject {
  constructor(config) {
    super(config);
    this.offsetY = config.offsetY || 0;
    this.movingProgressRemaining = 0;
    this.isPlayerControled = config.isPlayerControled || false;
    this.directionUpdate = {
      up:     ["y",-1],
      down:   ["y", 1],
      left:   ["x",-1],
      right:  ["x", 1],
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
      this.updatePosition(state);
    } else {
      if (this.isPlayerControled && state.arrow) {
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow,
        });
      }
      this.updateSprite(state);
    }
  }

  startBehavior(state, behavior) {
    this.direction = behavior.direction;
    if (behavior.type === "walk") {
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        return;
      }
      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemaining = 8; // 4/8/16
    }
  }

  updatePosition(state) {
    const [property, change] = this.directionUpdate[this.direction];
    this[property] += change * 4; // 8/4/2
    this.movingProgressRemaining -= 1;


    if (this.movingProgressRemaining === 0) {
      state.map.overworld.TriggersInit.checkTrigger("onStepTrigger");
    }
  }
  

  updateSprite(state) {
    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
      return;
    }
    this.sprite.setAnimation("idle-" + this.direction);
  }
}
