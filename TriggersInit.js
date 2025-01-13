class TriggersInit{
  constructor(state, ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.state = state;
    this.doors = window.MapsConfig.HouseStairs.doors;
    this.interactionKey = "KeyZ";
    this.descriptionOn = false;
  }

  createOrCloseDescription(triggerText) {
    if (this.isProcessing) return;
    this.isProcessing = true;
    const container = document.getElementById('discript-wrapper');
    const description = document.querySelector('.discription');
    
    if (this.descriptionOn) {
        const textDiv = document.getElementById('text-div');
        const imgDiv = document.getElementById('img-div');
        if (textDiv) textDiv.innerHTML = '';
        if (imgDiv) imgDiv.innerHTML = '';
        description.classList.add('closing');
        description.addEventListener('animationend', () => {
            container.innerHTML = '';
            this.descriptionOn = false;
            this.state.map.overworld.directionInput.init(this.state);
        }, { once: true });
    } else {
        const pattern = `
        <div class="discription">
          <div id="text-div-wrap">
            <div id="text-div">${triggerText}</div>
          </div>
          
          <div id="img-div">
            <img id="pointer" src="./sprites/others/pointer.png"></img>
          </div>
        </div>
        `;

        container.innerHTML = pattern;
        this.descriptionOn = true;
        window.SFX.text.play();
        this.state.map.overworld.directionInput.deleteInputs(this.state);
    }

    setTimeout(() => {
        this.isProcessing = false;
    }, 100);
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
        const triggerText = currentTriggers[frontTileKey][2] 
        this.createOrCloseDescription(triggerText);
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
    this.state.map.overworld.directionInput.deleteInputs(this.state);
    this.canvas.style.transition = "opacity 0.6s";
    this.canvas.style.opacity = 0;
    window.SFX.doorEnter.play();
  
    setTimeout(() => {
      this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      this.state.map.overworld.startTriggers();
      this.state.map.overworld.directionInput.init(this.state);
  
      window.SFX.doorExit.play();
      this.canvas.style.opacity = 1;
    }, 700); 
  }
  
  noSFXUpdateMap(newMap) {
    this.state.map.overworld.directionInput.deleteInputs(this.state);
    this.canvas.style.transition = "opacity 0.6s";
    this.canvas.style.opacity = 0;
  
    setTimeout(() => {
      this.state.map.overworld.startMap(window.MapsConfig[newMap]);
      this.state.map.overworld.startTriggers();
      this.state.map.overworld.directionInput.init(this.state);
  
      this.canvas.style.opacity = 1;
    }, 700); 
  }
  
}
