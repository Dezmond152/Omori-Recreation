window.MapsConfig = {
  HouseStairs: {
    lowerSrc: "./sprites/places/HouseStairs.png",
    upperSrc: "./sprites/places/HouseStairs-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(11),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {
      [utils.asGridCord(6, 15)]: ['onStepTrigger', 'HouseHall', [utils.asGridCord(3, 4)]],
    },

    walls: {
      [utils.asGridCord(0, 3)]: true,
      [utils.asGridCord(1, 3)]: true,
      [utils.asGridCord(2, 3)]: true,
      [utils.asGridCord(3, 3)]: true,
      [utils.asGridCord(4, 3)]: true,
      [utils.asGridCord(5, 3)]: true,
      [utils.asGridCord(6, 3)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(8, 3)]: true,
      [utils.asGridCord(9, 3)]: true,
      [utils.asGridCord(10, 3)]: true,
      [utils.asGridCord(11, 3)]: true,
      [utils.asGridCord(12, 4)]: true,
      [utils.asGridCord(12, 5)]: true,
      [utils.asGridCord(13, 6)]: true,
      [utils.asGridCord(13, 7)]: true,
      [utils.asGridCord(12, 8)]: true,
      [utils.asGridCord(11, 8)]: true,
      [utils.asGridCord(10, 8)]: true,
      [utils.asGridCord(9, 8)]: true,
      [utils.asGridCord(8, 8)]: true,
      [utils.asGridCord(7, 8)]: true,
      [utils.asGridCord(7, 9)]: true,
      [utils.asGridCord(7, 10)]: true,
      [utils.asGridCord(7, 11)]: true,
      [utils.asGridCord(7, 12)]: true,
      [utils.asGridCord(8, 11)]: true,
      [utils.asGridCord(9, 11)]: true,
      [utils.asGridCord(10, 11)]: true,
      [utils.asGridCord(11, 11)]: true,
      [utils.asGridCord(12, 12)]: true,
      [utils.asGridCord(13, 13)]: true,
      [utils.asGridCord(12, 14)]: true,
      [utils.asGridCord(11, 14)]: true,
      [utils.asGridCord(10, 15)]: true,
      [utils.asGridCord(9, 15)]: true,
      [utils.asGridCord(8, 15)]: true,
      [utils.asGridCord(7, 15)]: true,
      [utils.asGridCord(6, 16)]: true,
      [utils.asGridCord(5, 15)]: true,
      [utils.asGridCord(4, 15)]: true,
      [utils.asGridCord(3, 15)]: true,
      [utils.asGridCord(0, 14)]: true,
      [utils.asGridCord(1, 14)]: true,
      [utils.asGridCord(2, 14)]: true,
      [utils.asGridCord(-1, 13)]: true,
      [utils.asGridCord(0, 12)]: true,
      [utils.asGridCord(1, 11)]: true,
      [utils.asGridCord(2, 11)]: true,
      [utils.asGridCord(3, 11)]: true,
      [utils.asGridCord(4, 11)]: true,
      [utils.asGridCord(5, 12)]: true,
      [utils.asGridCord(5, 11)]: true,
      [utils.asGridCord(5, 10)]: true,
      [utils.asGridCord(5, 9)]: true,
      [utils.asGridCord(5, 8)]: true,
      [utils.asGridCord(4, 8)]: true,
      [utils.asGridCord(3, 8)]: true,
      [utils.asGridCord(2, 8)]: true,
      [utils.asGridCord(1, 8)]: true,
      [utils.asGridCord(0, 8)]: true,
      [utils.asGridCord(-1, 7)]: true,
      [utils.asGridCord(1, 6)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(-1, 4)]: true,
    },
  },

  SunnyRoom: {
    lowerSrc: "./sprites/places/SunnyRoom.png",
    upperSrc: "./sprites/places/SunnyRoom-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(3),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {
      [utils.asGridCord(1, 7)]: ['onStepTrigger', 'HouseStairs', [utils.asGridCord(11, 4)]],
      [utils.asGridCord(3, 2)]: ['onPressTrigger'],
    },

    walls: {
      [utils.asGridCord(0, 2)]: true,
      [utils.asGridCord(1, 2)]: true,
      [utils.asGridCord(2, 2)]: true,
      [utils.asGridCord(3, 2)]: true,
      [utils.asGridCord(4, 2)]: true,
      [utils.asGridCord(5, 3)]: true,
      [utils.asGridCord(6, 2)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(7, 4)]: true,
      [utils.asGridCord(7, 5)]: true,
      [utils.asGridCord(6, 6)]: true,
      [utils.asGridCord(5, 7)]: true,
      [utils.asGridCord(4, 6)]: true,
      [utils.asGridCord(3, 6)]: true,
      [utils.asGridCord(2, 6)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 8)]: true,
      [utils.asGridCord(0, 7)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(0, 4)]: true,
      [utils.asGridCord(-1, 3)]: true,
    },
  },

  HouseBath: {
    lowerSrc: "./sprites/places/HouseBath.png",
    upperSrc: "./sprites/places/HouseBath-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {

    },

    walls: {
      [utils.asGridCord(0, 2)]: true,
      [utils.asGridCord(1, 2)]: true,
      [utils.asGridCord(2, 2)]: true,
      [utils.asGridCord(3, 2)]: true,
      [utils.asGridCord(4, 2)]: true,
      [utils.asGridCord(5, 2)]: true,
      [utils.asGridCord(6, 3)]: true,
      [utils.asGridCord(6, 4)]: true,
      [utils.asGridCord(6, 5)]: true,
      [utils.asGridCord(5, 6)]: true,
      [utils.asGridCord(5, 7)]: true,
      [utils.asGridCord(4, 8)]: true,
      [utils.asGridCord(3, 7)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 7)]: true,
      [utils.asGridCord(0, 7)]: true,
      [utils.asGridCord(-1, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(-1, 4)]: true,
      [utils.asGridCord(-1, 3)]: true,
    },
  },

  ParentsRoom: {
    lowerSrc: "./sprites/places/ParentsRoom.png",
    upperSrc: "./sprites/places/ParentsRoom-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {
      
    },

    walls: {
      [utils.asGridCord(0, 2)]: true,
      [utils.asGridCord(1, 3)]: true,
      [utils.asGridCord(1, 4)]: true,
      [utils.asGridCord(2, 4)]: true,
      [utils.asGridCord(2, 3)]: true,
      [utils.asGridCord(3, 2)]: true,
      [utils.asGridCord(4, 3)]: true,
      [utils.asGridCord(5, 2)]: true,
      [utils.asGridCord(6, 3)]: true,
      [utils.asGridCord(7, 4)]: true,
      [utils.asGridCord(7, 5)]: true,
      [utils.asGridCord(6, 6)]: true,
      [utils.asGridCord(6, 7)]: true,
      [utils.asGridCord(5, 8)]: true,
      [utils.asGridCord(4, 7)]: true,
      [utils.asGridCord(3, 7)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 6)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(-1, 4)]: true,
      [utils.asGridCord(-1, 3)]: true,
    },
  },

  PianoRoom: {
    lowerSrc: "./sprites/places/PianoRoom.png",
    upperSrc: "./sprites/places/PianoRoom-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(12),
        src: "./sprites/chars/sunny.png",
        direction: "up",
      }),
    },

    triggers: {

    },

    walls: {
      [utils.asGridCord(0, 5)]: true,
      [utils.asGridCord(1, 5)]: true,
      [utils.asGridCord(2, 5)]: true,
      [utils.asGridCord(3, 5)]: true,
      [utils.asGridCord(4, 5)]: true,
      [utils.asGridCord(5, 5)]: true,
      [utils.asGridCord(6, 6)]: true,
      [utils.asGridCord(7, 7)]: true,
      [utils.asGridCord(8, 8)]: true,
      [utils.asGridCord(8, 9)]: true,
      [utils.asGridCord(8, 10)]: true,
      [utils.asGridCord(8, 11)]: true,
      [utils.asGridCord(7, 12)]: true,
      [utils.asGridCord(6, 13)]: true,
      [utils.asGridCord(5, 13)]: true,
      [utils.asGridCord(4, 14)]: true,
      [utils.asGridCord(3, 13)]: true,
      [utils.asGridCord(2, 13)]: true,
      [utils.asGridCord(1, 12)]: true,
      [utils.asGridCord(0, 12)]: true,
      [utils.asGridCord(-1, 11)]: true,
      [utils.asGridCord(-1, 10)]: true,
      [utils.asGridCord(-1, 9)]: true,
      [utils.asGridCord(-1, 8)]: true,
      [utils.asGridCord(-1, 7)]: true,
      [utils.asGridCord(-1, 6)]: true,
      [utils.asGridCord(3, 8)]: true,
      [utils.asGridCord(4, 8)]: true,
      [utils.asGridCord(3, 9)]: true,
      [utils.asGridCord(4, 9)]: true,
    },
  },

  HouseHall: {
    lowerSrc: "./sprites/places/HouseHall.png",
    upperSrc: "./sprites/places/HouseHall-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {

    },

    walls: {
      [utils.asGridCord(2, 3)]: true,
      [utils.asGridCord(3, 3)]: true,
      [utils.asGridCord(4, 3)]: true,
      [utils.asGridCord(5, 3)]: true,
      [utils.asGridCord(6, 3)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(8, 3)]: true,
      [utils.asGridCord(9, 3)]: true,
      [utils.asGridCord(10, 3)]: true,
      [utils.asGridCord(11, 3)]: true,
      [utils.asGridCord(12, 4)]: true,
      [utils.asGridCord(12, 5)]: true,
      [utils.asGridCord(13, 6)]: true,
      [utils.asGridCord(13, 7)]: true,
      [utils.asGridCord(13, 8)]: true,
      [utils.asGridCord(13, 9)]: true,
      [utils.asGridCord(12, 10)]: true,
      [utils.asGridCord(11, 10)]: true,
      [utils.asGridCord(10, 10)]: true,
      [utils.asGridCord(9, 10)]: true,
      [utils.asGridCord(8, 11)]: true,
      [utils.asGridCord(7, 12)]: true,
      [utils.asGridCord(6, 11)]: true,
      [utils.asGridCord(5, 11)]: true,
      [utils.asGridCord(4, 11)]: true,
      [utils.asGridCord(3, 10)]: true,
      [utils.asGridCord(2, 10)]: true,
      [utils.asGridCord(1, 10)]: true,
      [utils.asGridCord(0, 10)]: true,
      [utils.asGridCord(-1, 9)]: true,
      [utils.asGridCord(0, 8)]: true,
      [utils.asGridCord(1, 8)]: true,
      [utils.asGridCord(2, 8)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 6)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(0, 4)]: true,
      [utils.asGridCord(1, 4)]: true,
    },
  },

  HouseKitchen: {
    lowerSrc: "./sprites/places/HouseKitchen.png",
    upperSrc: "./sprites/places/HouseKitchen-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {

    },

    walls: {
      [utils.asGridCord(1, 2)]: true,
      [utils.asGridCord(2, 2)]: true,
      [utils.asGridCord(3, 2)]: true,
      [utils.asGridCord(4, 2)]: true,
      [utils.asGridCord(5, 2)]: true,
      [utils.asGridCord(6, 2)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(8, 3)]: true,
      [utils.asGridCord(9, 4)]: true,
      [utils.asGridCord(8, 5)]: true,
      [utils.asGridCord(7, 5)]: true,
      [utils.asGridCord(6, 6)]: true,
      [utils.asGridCord(5, 6)]: true,
      [utils.asGridCord(4, 7)]: true,
      [utils.asGridCord(3, 8)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 7)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(0, 5)]: true,
      [utils.asGridCord(1, 4)]: true,
      [utils.asGridCord(2, 4)]: true,
      [utils.asGridCord(0, 3)]: true,
    },
  },

  HouseDiner: {
    lowerSrc: "./sprites/places/HouseDiner.png",
    upperSrc: "./sprites/places/HouseDiner-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
      }),
    },

    triggers: {

    },

    walls: {
      [utils.asGridCord(1, 2)]: true,
      [utils.asGridCord(2, 2)]: true,
      [utils.asGridCord(3, 2)]: true,
      [utils.asGridCord(4, 2)]: true,
      [utils.asGridCord(5, 2)]: true,
      [utils.asGridCord(6, 2)]: true,
      [utils.asGridCord(7, 3)]: true,
      [utils.asGridCord(7, 4)]: true,
      [utils.asGridCord(8, 4)]: true,
      [utils.asGridCord(9, 5)]: true,
      [utils.asGridCord(8, 6)]: true,
      [utils.asGridCord(7, 6)]: true,
      [utils.asGridCord(6, 7)]: true,
      [utils.asGridCord(5, 8)]: true,
      [utils.asGridCord(4, 9)]: true,
      [utils.asGridCord(3, 9)]: true,
      [utils.asGridCord(2, 9)]: true,
      [utils.asGridCord(1, 9)]: true,
      [utils.asGridCord(0, 8)]: true,
      [utils.asGridCord(0, 7)]: true,
      [utils.asGridCord(-1, 6)]: true,
      [utils.asGridCord(-1, 5)]: true,
      [utils.asGridCord(-1, 4)]: true,
      [utils.asGridCord(0, 3)]: true,
    },
  },

};