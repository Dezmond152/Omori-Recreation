class DirectionInput {
	constructor() {
		this.heldDIrections = [];

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
	}

	get direction() {
		return this.heldDIrections[0];
	}

	init(state) {
		const handleKeyDown = (e) => {
      const dir = this.moveKeys[e.code];
      if (dir && this.heldDIrections.indexOf(dir) === -1) {
        this.heldDIrections.unshift(dir);
      }
    };

    const handleKeyUp = (e) => {
      const dir = this.moveKeys[e.code];
      const index = this.heldDIrections.indexOf(dir);
      if (index > -1) {
        this.heldDIrections.splice(index, 1);
      }
    };

		const interactKey = (e) => {
      if (e.code === this.interactionKey) {
        state.map.overworld.TriggersInit.checkTrigger("onPressTrigger")
      }
    }
  
    document.addEventListener("keydown", interactKey);
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
	}
}