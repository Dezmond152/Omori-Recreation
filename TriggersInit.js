class TriggersInit{
  constructor(state, ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.state = state;
    this.doors = window.MapsConfig.HouseStairs.doors;
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

  onStepTrigger(x, y){
    const checkCord = `${x},${y}`;
    const currentTriggers = this.state.map.triggers;

    if (currentTriggers[checkCord]?.includes("onStepTrigger")) {
      const arr = this.state.map.triggers[checkCord];
      const newMap = arr ? arr[1] : undefined;

      if(currentTriggers[checkCord]?.includes("noSFX")){
        this.noSFXUpdateMap(newMap);
      } else {
        this.updateMap(newMap);
      }
    }
  }

  onPressTrigger(x, y, direction){
    const frontTile = this.getTileInFront(direction, x, y);
    const frontTileKey = `${frontTile.x},${frontTile.y}`;
    const currentTriggers = this.state.map.triggers;
      
 
    if (currentTriggers[frontTileKey]?.includes("onPressTrigger")) {
      if (currentTriggers[frontTileKey]?.includes("changeMap")) {
        const arr = currentTriggers[frontTileKey];
        const newMap = arr ? arr[1] : undefined;
        const doors = Object.values(this.state.map.gameObjects).filter(obj => obj instanceof Doors);

        for (let door of doors) {
          if (door.x === frontTile.x && door.y === frontTile.y) {
            door.open();

            setTimeout(() => {
              this.updateMap(newMap);  
            }, 100);  

            return; 
          }
        }


        this.noSFXUpdateMap(newMap);
      }
  
      if (currentTriggers[frontTileKey]?.includes("info")) {
        console.log("Тут будет инфа");
        
        
      }
    } 
  }
  
  
  checkTrigger(triggerType) {
    const x = this.state.map.gameObjects.Sunny.x;
    const y = this.state.map.gameObjects.Sunny.y;
    const direction = this.state.map.gameObjects.Sunny.direction;
   
    if(triggerType === 'onStepTrigger') {
      this.onStepTrigger(x, y)
    }

    if(triggerType === 'onPressTrigger') {
      this.onPressTrigger(x, y, direction)
    }
  }


  
  updateMap(newMap){
    this.canvas.style.transition = "opacity 0.6s";
    this.canvas.style.opacity = 0;
    window.SFX.doorEnter.play();

    setTimeout(() => {
      this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      this.state.map.overworld.startTriggers();

      window.SFX.doorExit.play();
      this.canvas.style.opacity = 1;
    }, 700); 
  }

  noSFXUpdateMap(newMap) {
    this.canvas.style.transition = "opacity 0.6s";
    this.canvas.style.opacity = 0;
    
    setTimeout(() => {
      this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      this.state.map.overworld.startTriggers();

      this.canvas.style.opacity = 1;
    }, 700); 
  }




}