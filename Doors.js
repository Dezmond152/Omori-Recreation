class Doors extends GameObject {
  constructor(config) {
    super(config);
    this.defaultAnimation = "idle",
    this.interactionKey = "KeyZ";
    this.mapToChange = config.changeMap;

    this.sprite = new Sprite({
      src: config.src,
      gameObject: this,
      animations: config.animations || {
        "idle"    : [[1, 0]], 
        "opening" : [[1, 0],[3, 0],[5, 0],[7, 0]],
      },
    });

    this.customAnimation = this.defaultAnimation || "idle";
    this.isOpening = false;
  }
 
  update() {
    this.sprite.setAnimation(this.customAnimation);
  }

  open() {
    if (!this.isOpening) {
      this.isOpening = true;  
      this.customAnimation = "opening"; 
      setTimeout(() => {
        this.isOpening = false;  
        this.customAnimation = "idle";  
      }, 1000);
    }
  }
}
