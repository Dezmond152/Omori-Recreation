class Person extends GameObject {
    constructor(config){
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControled = config.isPlayerControled || false;

        this.directionUpdate = {
            "up"    : ["y",-1],
            "down"  : ["y", 1],
            "left"  : ["x",-1],
            "right" : ["x", 1],
        }
    }

    update(state) {
        this.updatePosition();
        this.updateSprite(state);

        if(this.isPlayerControled && this.movingProgressRemaining === 0 && state.arrow){
            this.direction = state.arrow;
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        if(this.movingProgressRemaining > 0){
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change * 2;
            this.movingProgressRemaining -= 1;
        }
    }

    updateSprite(state) {
        if(this.isPlayerControled && this.movingProgressRemaining === 0 &&  !state.arrow){
            this.sprite.setAnimation("idle-"+this.direction);
            return;
        }
        
        if(this.movingProgressRemaining > 0){
            this.sprite.setAnimation("walk-"+this.direction);
        }
    }
}