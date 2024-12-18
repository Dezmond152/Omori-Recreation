class DirectionInput {
    constructor(){
        this.heldDIrections = [];

        this.map = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowLeft": "left",
            "KeyA": "left",
            "ArrowRight": "right",
            "KeyD": "right",
        }
    }

    get direction() {
        return this.heldDIrections[0];
    }

    init(){
        document.addEventListener("keydown", e =>{
            const dir = this.map[e.code];
            if(dir && this.heldDIrections.indexOf(dir) === -1){
               this.heldDIrections.unshift(dir);
               console.log(this.heldDIrections)
            }
        });

        document.addEventListener("keyup", e =>{
            const dir = this.map[e.code];
            const index = this.heldDIrections.indexOf(dir);
            if(index > -1){
                this.heldDIrections.splice(index, 1);
                console.log(this.heldDIrections)
            }

        });

    }
}