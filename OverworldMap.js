class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperSrc = new Image();
        this.upperSrc.src = config.upperSrc;
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperSrc, 0, 0)
    }
}

window.OverworldMaps = {
    HouseStairs: {
        lowerSrc: '/sprites/places/house-stairs-orig.png',
        upperSrc: '/sprites/places/house-stairs-orig-layout.png',
        gameObjects: {
            Sunny: new GameObject({
                x: 6,
                y: 6,
                src: '/sprites/chars/sunny.png'
            })
        }
    },

    SunnyRoom: {
        lowerSrc: '/sprites/places/SunnyRoom.png',
        upperSrc: 'sprites/places/SunnyRoom-layout.png',
        gameObjects: {
            Sunny: new GameObject({
                x: 4,
                y: 3,
                src: '/sprites/chars/sunny.png'
            })
        }
    },



    BathRoom: {

    },
    ParentsRoom: {

    }
}