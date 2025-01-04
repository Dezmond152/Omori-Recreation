class TriggersInit{
  constructor(state){
    this.state = state;
    this.interactionKey = "KeyZ";
  }

  getTileInFront(direction, x, y){
		switch (direction) {
			case "up":    return { x, y: y - 32 };
			case "right": return { x: x + 32, y };
			case "down":  return { x, y: y + 32 };
			case "left":  return { x: x - 32, y };
			default:      return { x, y };
		}
	}


  checkTrigger(triggerType) {
    const x = this.state.map.gameObjects.Sunny.x;
    const y = this.state.map.gameObjects.Sunny.y;
    const direction = this.state.map.gameObjects.Sunny.direction;
   
    if(triggerType === 'onStepTrigger') {
      const checkCord = `${x},${y}`;

      if (this.state.map.triggers[checkCord]?.includes("onStepTrigger")) {
        const arr = this.state.map.triggers[checkCord];
        const newMap = arr ? arr[1] : undefined;
        console.log(newMap);
        
        this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      }
    }

    if(triggerType === 'onPressTrigger') {
      const frontTile = this.getTileInFront(direction, x, y);
      
    }
  }

  init(){
    document.addEventListener('keydown', e => {
			if (e.code === this.interactionKey) {
        this.checkTrigger("onPressTrigger")
			}
		});
  }
}