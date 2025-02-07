window.MapsConfig = {
  HouseStairs: {
    lowerSrc: "./sprites/places/HouseStairs.png",
    upperSrc: "./sprites/places/HouseStairs-layout.png",
    doorsSrc: "./sprites/places/doors.png",
    gameObjects: {
      Door1: new Doors({
        x: utils.withGrid(1),
        y: utils.withGrid(3),
        src: "./sprites/places/doors.png",
        changeMap: "ParentsRoom"
      }),

      Door2: new Doors({
        x: utils.withGrid(8),
        y: utils.withGrid(3),
        src: "./sprites/places/doors.png",
        changeMap: "ParentsRoom"
      }),

      Door3: new Doors({
        x: utils.withGrid(11),
        y: utils.withGrid(3),
        src: "./sprites/places/doors.png",
        changeMap: "ParentsRoom"
      }),

      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(11),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
        offsetY: -6,
      }),
    },

    
    triggers: {
      [utils.asGridCord(6, 15)]: ['onStepTrigger', 'HouseHall', 'noSFX'],
      [utils.asGridCord(11, 3)]: ['onPressTrigger', 'SunnyRoom', 'changeMap', 'door'],
      [utils.asGridCord(1, 3)]: ['onPressTrigger', 'ParentsRoom', 'changeMap', 'door'],
      [utils.asGridCord(8, 3)]: ['onPressTrigger', 'HouseBath', 'changeMap', 'door'],
      [utils.asGridCord(11, 11)]: ['onPressTrigger', 'PianoRoom', 'changeMap', 'door'],
      [utils.asGridCord(0, 3)]: ['onPressTrigger', 'info', window.textConfig.watches],
      [utils.asGridCord(2, 3)]: ['onPressTrigger', 'info', window.textConfig.fakeflower], 
      [utils.asGridCord(6, 3)]: ['onPressTrigger', 'info', window.textConfig.windows],
      [utils.asGridCord(10, 3)]: ['onPressTrigger', 'info', window.textConfig.fakeflower],
      [utils.asGridCord(12, 4)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(12, 5)]: ['onPressTrigger', 'info', window.textConfig.photos],
      [utils.asGridCord(0, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(1, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(8, 11)]: ['onPressTrigger', 'info', window.textConfig.eshelf],
      [utils.asGridCord(9, 11)]: ['onPressTrigger', 'info', window.textConfig.eshelf],
      [utils.asGridCord(12, 12)]: ['onPressTrigger', 'info', window.textConfig.flovers],
      [utils.asGridCord(12, 14)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(11, 14)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(2, 14)]: ['onPressTrigger', 'info', window.textConfig.photos], 
      [utils.asGridCord(1, 14)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(0, 14)]: ['onPressTrigger', 'info', window.textConfig.boxes], 
      [utils.asGridCord(0, 12)]: ['onPressTrigger', 'info', window.textConfig.flovers],
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
  }, //

  SunnyRoom: {
    lowerSrc: "./sprites/places/SunnyRoom.png",
    upperSrc: "./sprites/places/SunnyRoom-layout.png",
    doorsSrc: "",

    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(3),
        src: "./sprites/chars/sunny.png",
        direction: "down",
        offsetY: -6,
      }),
    },


    
    triggers: {
      [utils.asGridCord(1, 7)]: ['onStepTrigger', 'HouseStairs'],
      [utils.asGridCord(0, 2)]: ['onPressTrigger', 'info', window.textConfig.shelf],
      [utils.asGridCord(1, 2)]: ['onPressTrigger', 'info', window.textConfig.pc],
      [utils.asGridCord(2, 2)]: ['onPressTrigger', 'info', window.textConfig.phone],
      [utils.asGridCord(3, 2)]: ['onPressTrigger', 'info', window.textConfig.stickers.sticker1],
      [utils.asGridCord(4, 2)]: ['onPressTrigger', 'info', window.textConfig.lamp],
      [utils.asGridCord(5, 3)]: ['onPressTrigger', 'info', window.textConfig.bed],
      [utils.asGridCord(6, 2)]: ['onPressTrigger', 'info', window.textConfig.wardrobe],
      [utils.asGridCord(6, 6)]: ['onPressTrigger', 'info', window.textConfig.flovers],
      [utils.asGridCord(4, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(3, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(2, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(0, 6)]: ['onPressTrigger', 'info', window.textConfig.table],
      [utils.asGridCord(0, 4)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      
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
  }, //

  HouseBath: {
    lowerSrc: "./sprites/places/HouseBath.png",
    upperSrc: "./sprites/places/HouseBath-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(7),
        src: "./sprites/chars/sunny.png",
        direction: "up",
        offsetY: -6,
      }),
    },

    triggers: {
      [utils.asGridCord(4, 7)]: ['onStepTrigger', 'HouseStairs'],
      [utils.asGridCord(3, 2)]: ['onPressTrigger', 'info', "Mirror here"],
      [utils.asGridCord(0, 2)]: ['onPressTrigger', 'info', window.textConfig.toilet],
      [utils.asGridCord(1, 2)]: ['onPressTrigger', 'info', window.textConfig.toiletshelf],
      [utils.asGridCord(2, 2)]: ['onPressTrigger', 'info', window.textConfig.stickers.sticker2],
      [utils.asGridCord(4, 2)]: ['onPressTrigger', 'info', window.textConfig.bathtub],
      [utils.asGridCord(5, 2)]: ['onPressTrigger', 'info', window.textConfig.bathtub],
      [utils.asGridCord(5, 6)]: ['onPressTrigger', 'info', window.textConfig.flovers],
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
  }, //

  ParentsRoom: {
    lowerSrc: "./sprites/places/ParentsRoom.png",
    upperSrc: "./sprites/places/ParentsRoom-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(7),
        src: "./sprites/chars/sunny.png",
        direction: "up",
        offsetY: -6,
      }),
    },

    triggers: {
      [utils.asGridCord(5, 7)]: ['onStepTrigger', 'HouseStairs'],
      [utils.asGridCord(0, 2)]: ['onPressTrigger', 'info', window.textConfig.lamp],
      [utils.asGridCord(1, 3)]: ['onPressTrigger', 'info', window.textConfig.mombed],
      [utils.asGridCord(1, 4)]: ['onPressTrigger', 'info', window.textConfig.mombed],
      [utils.asGridCord(2, 4)]: ['onPressTrigger', 'info', window.textConfig.mombed],
      [utils.asGridCord(2, 3)]: ['onPressTrigger', 'info', window.textConfig.mombed],
      [utils.asGridCord(3, 2)]: ['onPressTrigger', 'info', window.textConfig.photos],
      [utils.asGridCord(4, 3)]: ['onPressTrigger', 'info', window.textConfig.basket],
      [utils.asGridCord(5, 2)]: ['onPressTrigger', 'info', window.textConfig.eshelf],
      [utils.asGridCord(6, 3)]: ['onPressTrigger', 'info', window.textConfig.flovers],
      [utils.asGridCord(6, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(1, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(0, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
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
  }, //

  PianoRoom: {
    lowerSrc: "./sprites/places/PianoRoom.png",
    upperSrc: "./sprites/places/PianoRoom-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(13),
        src: "./sprites/chars/sunny.png",
        direction: "up",
        offsetY: -6,
      }),
    },

    triggers: {
      [utils.asGridCord(4, 13)]: ['onStepTrigger', 'HouseStairs', 'noSFX'],
      [utils.asGridCord(0, 5)]: ['onPressTrigger', 'info', window.textConfig.eshelf],
      [utils.asGridCord(1, 5)]: ['onPressTrigger', 'info', window.textConfig.watches],
      [utils.asGridCord(6, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(7, 7)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(7, 12)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(0, 12)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(1, 12)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(3, 8)]: ['onPressTrigger', 'info', window.textConfig.piano],
      [utils.asGridCord(4, 8)]: ['onPressTrigger', 'info', window.textConfig.piano],
      [utils.asGridCord(3, 9)]: ['onPressTrigger', 'info', window.textConfig.piano],
      [utils.asGridCord(4, 9)]: ['onPressTrigger', 'info', window.textConfig.piano],
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
  }, //

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
        offsetY: -6,
      }),
    },

    triggers: {
      [utils.asGridCord(3, 3)]: ['onPressTrigger', 'HouseStairs', 'changeMap'],
      [utils.asGridCord(0, 5)]: ['onStepTrigger', 'HouseKitchen', 'noSFX'],
      [utils.asGridCord(0, 9)]: ['onStepTrigger', 'HouseDiner', 'noSFX'],
      [utils.asGridCord(4, 3)]: ['onPressTrigger', 'info', window.textConfig.stickers.sticker3],
      [utils.asGridCord(5, 3)]: ['onPressTrigger', 'info', window.textConfig.fireplace],
      [utils.asGridCord(6, 3)]: ['onPressTrigger', 'info', window.textConfig.fireplace],
      [utils.asGridCord(7, 3)]: ['onPressTrigger', 'info', window.textConfig.windows],
      [utils.asGridCord(12, 4)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(12, 5)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(12, 10)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(11, 10)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(10, 10)]: ['onPressTrigger', 'info', window.textConfig.photos],
      [utils.asGridCord(9, 10)]: ['onPressTrigger', 'info', window.textConfig.rack],
      [utils.asGridCord(3, 10)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(2, 10)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(2, 7)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(2, 8)]: ['onPressTrigger', 'info', window.textConfig.boxes],

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
  }, //

  HouseKitchen: {
    lowerSrc: "./sprites/places/HouseKitchen.png",
    upperSrc: "./sprites/places/HouseKitchen-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(4),
        src: "./sprites/chars/sunny.png",
        direction: "down",
        offsetY: -6,
      }),
    },

    triggers: {
      [utils.asGridCord(8, 4)]: ['onStepTrigger', 'HouseHall', 'noSFX'],
      [utils.asGridCord(1, 2)]: ['onPressTrigger', 'info', window.textConfig.microwave],
      [utils.asGridCord(2, 2)]: ['onPressTrigger', 'info', window.textConfig.sink],
      [utils.asGridCord(3, 2)]: ['onPressTrigger', 'info', window.textConfig.pans],
      [utils.asGridCord(6, 2)]: ['onPressTrigger', 'info', window.textConfig.fridge],
      [utils.asGridCord(0, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(5, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(6, 6)]: ['onPressTrigger', 'info', window.textConfig.boxes],
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
      [utils.asGridCord(3, 7)]: true,
      [utils.asGridCord(3, 8)]: true,
      [utils.asGridCord(2, 7)]: true,
      [utils.asGridCord(1, 7)]: true,
      [utils.asGridCord(0, 6)]: true,
      [utils.asGridCord(0, 5)]: true,
      [utils.asGridCord(1, 4)]: true,
      [utils.asGridCord(2, 4)]: true,
      [utils.asGridCord(0, 3)]: true,
    },
  }, //

  HouseDiner: {
    lowerSrc: "./sprites/places/HouseDiner.png",
    upperSrc: "./sprites/places/HouseDiner-layout.png",
    gameObjects: {
      Sunny: new Person({
        isPlayerControled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(5),
        src: "./sprites/chars/sunny.png",
        direction: "down",
        offsetY: -6,
      }),
    },

    triggers: {
      [utils.asGridCord(8, 5)]: ['onStepTrigger', 'HouseHall', 'noSFX'],
      [utils.asGridCord(0, 3)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(0, 7)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(0, 8)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(6, 7)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(5, 8)]: ['onPressTrigger', 'info', window.textConfig.boxes],
      [utils.asGridCord(5, 2)]: ['onPressTrigger', 'info', window.textConfig.drawer],
      [utils.asGridCord(6, 2)]: ['onPressTrigger', 'info', window.textConfig.momshelf],
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
  }, //

};