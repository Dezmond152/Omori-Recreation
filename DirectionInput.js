class DirectionInput {
	constructor() {
		this.heldDIrections = [];

		this.map = {
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

	getTileInFront(x, y, direction){
		switch (direction) {
			case "up":    return { x, y: y - 32 };
			case "right": return { x: x + 32, y };
			case "down":  return { x, y: y + 32 };
			case "left":  return { x: x - 32, y };
			default:      return { x, y };
		}
	}

	init(state) {
		document.addEventListener("keydown", e => {
			const dir = this.map[e.code];
			if (dir && this.heldDIrections.indexOf(dir) === -1) {
				this.heldDIrections.unshift(dir);
			}
		});

		document.addEventListener("keyup", e => {
			const dir = this.map[e.code];
			const index = this.heldDIrections.indexOf(dir);
			if (index > -1) {
				this.heldDIrections.splice(index, 1);
			}
		});


		///
		document.addEventListener('keydown', e => {
			if (e.code === "KeyZ") {
				const x = state.map.gameObjects.Sunny.x;
				const y = state.map.gameObjects.Sunny.y;
				const direction = state.map.gameObjects.Sunny.direction;
				const frontTile = this.getTileInFront(x, y, direction);
			  const triger = "onPressTrigger";
				state.map.checkTrigger(frontTile.x, frontTile.y, triger);
			}
		});
		///
	}
}