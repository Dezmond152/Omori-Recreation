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
          const arr = currentTriggers[frontTileKey];
          const newMap = arr ? arr[1] : undefined;
    
          if(currentTriggers[frontTileKey]?.includes('door')){
            // this.doorAnimation(frontTileKey, this.ctx);
            
            this.updateMap(newMap);
          } else {
            this.updateMap(newMap);
          } 
        }

        if(currentTriggers[frontTileKey]?.includes("info")){
          console.log("тут будет инфа")
          // const cameraPerson = this.state.map.gameObjects.Sunny;
          // this.state.map.drawDoorImage(this.ctx, cameraPerson);
        }
      }
    }
  }

  // doorAnimation(frontTileKey, ctx) {
  // console.log("Начало doorAnimation");

  
  //   const [doorCordX, doorCordY] = frontTileKey.split(",").map(Number);  
  //   const spriteWidth = 32;
  //   const spriteHeight = 32;
  //   const frameCount = 4;
  //   let currentFrame = 0;
  
  //   const animate = () => {
  
  //     if (currentFrame >= frameCount) {
  //       console.log("Анимация завершена.");
  //       return;
  //     }

  //     const frameX = currentFrame * spriteWidth;
      
  //     currentFrame++;
  //     setTimeout(animate, 100);
  //   };

  //   animate(); 
  // }
  


  
  updateMap(newMap){
    this.canvas.style.transition = "opacity 0.6s";
    this.canvas.style.opacity = 0;

    setTimeout(() => {
      this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      this.state.map.overworld.startTriggers();
  
      this.canvas.style.opacity = 1;
    }, 700); 
  }
}