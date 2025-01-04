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
	}

	get direction() {
		return this.heldDIrections[0];
	}

	init(state) {
		document.addEventListener("keydown", e => {
			const dir = this.moveKeys[e.code];
			if (dir && this.heldDIrections.indexOf(dir) === -1) {
				this.heldDIrections.unshift(dir);
			}
		});

		document.addEventListener("keyup", e => {
			const dir = this.moveKeys[e.code];
			const index = this.heldDIrections.indexOf(dir);
			if (index > -1) {
				this.heldDIrections.splice(index, 1);
			}
		});	
	}
}