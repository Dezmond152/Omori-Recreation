class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(
        this.lowerImage, 
        utils.withGrid(7) - cameraPerson.x,
        utils.withGrid(10) - cameraPerson.y,
        )
    }

    drawUpperImage(ctx, cameraPerson){
        ctx.drawImage(
        this.upperImage, 
        utils.withGrid(7) - cameraPerson.x,
        utils.withGrid(10) - cameraPerson.y,
        )
    }
}

window.OverworldMaps = {
    HouseStairs: {
        lowerSrc: '/sprites/places/house-stairs-orig.png',
        upperSrc: '/sprites/places/house-stairs-orig-layout.png',
        gameObjects: {
            Sunny: new Person({
                isPlayerControled: true,
                x: utils.withGrid(6),
                y: utils.withGrid(9),
                src: '/sprites/chars/sunny.png'
            }),

            // Sunny2: new Person({
            //     x: utils.withGrid(5),
            //     y: utils.withGrid(5),
            //     src: '/sprites/chars/sunny.png'
            // })
        }
    },

    SunnyRoom: {
        lowerSrc: '/sprites/places/SunnyRoom.png',
        upperSrc: 'sprites/places/SunnyRoom-layout.png',
        gameObjects: {
            Sunny: new GameObject({
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                src: '/sprites/chars/sunny.png'
            })
        }
    },

}