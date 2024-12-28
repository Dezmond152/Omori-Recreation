class OverworldEvent{
  constructor({ map}){
    this.map = map;
    this.event = event;
  }

  changeMap(resolve){
    this.map.overworld.startMap(window.OverworldMaps[this.event.map]);
    resolve();
  }



}