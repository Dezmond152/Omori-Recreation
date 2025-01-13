class DirectionInput {
	constructor() {
		this.heldDirections = [];

		this.moveKeys = {
			"ArrowUp"    : "up",
			"KeyW"       : "up",
			"ArrowDown"  : "down",
			"KeyS"       : "down",
			"ArrowLeft"  : "left",
			"KeyA"       : "left",
			"ArrowRight" : "right",
			"KeyD"       : "right",
		};

		this.interactionKey = "KeyZ";

		this.handleKeyDown = null;
    this.handleKeyUp = null;
    this.interactKey = null;
	}

	get direction() {
		return this.heldDirections[0];
	}


	deleteInputs(state){
		state.map.overworld.directionInput.heldDirections = [];
		document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("keydown", this.interactKey);
	}

	init(state) {
		this.handleKeyDown = (e) => {
      const dir = this.moveKeys[e.code];
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir);
      }
    };

    this.handleKeyUp = (e) => {
      const dir = this.moveKeys[e.code];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    };

    this.interactKey = (e) => {
      if (e.code === this.interactionKey) {
        state.map.overworld.TriggersInit.checkTrigger("onPressTrigger");
      }
    };

    document.addEventListener("keydown", this.interactKey);
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
	}
}