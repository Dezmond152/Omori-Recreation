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
      const currentTriggers = this.state.map.triggers;

      if (currentTriggers[checkCord]?.includes("onStepTrigger")) {
        const arr = this.state.map.triggers[checkCord];
        const newMap = arr ? arr[1] : undefined;
        
        this.updateMap(newMap);
      }
    }

    if(triggerType === 'onPressTrigger') {
      const frontTile = this.getTileInFront(direction, x, y);
      const frontTileKey = `${frontTile.x},${frontTile.y}`;
      const currentTriggers = this.state.map.triggers;
 
      if(currentTriggers[frontTileKey]?.includes("onPressTrigger")){
        
        if(currentTriggers[frontTileKey]?.includes("changeMap")){
          const arr = this.state.map.triggers[frontTileKey];
          const newMap = arr ? arr[1] : undefined;
          this.updateMap(newMap);
        }

        if(currentTriggers[frontTileKey]?.includes("info")){
          console.log("тут будет инфа")
        }
      }
    }
  }
  
  updateMap(newMap){
    const canvas = document.querySelector(".game-canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.style.transition = "opacity 0.5s";
    canvas.style.opacity = 0;
  
    setTimeout(() => {
      this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      this.state.map.overworld.startTriggers();
  
      canvas.style.opacity = 1;
    }, 600); 
  }
}