class OverworldEvent{
  constructor({ map}){
    this.map = map;
    this.event = event;
  }

  changeMap(resolve){
    this.map.overworld.startMap(window.MapsConfig[this.event.map]);
    resolve();
  }
}