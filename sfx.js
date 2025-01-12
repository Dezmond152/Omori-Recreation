window.SFX = {
  doorEnter : new Audio('./sfx/DoorEnter.ogg'),
  doorExit : new Audio('./sfx/DoorExit.ogg'),
}

const setVolumeForAllSFX = (volume) => {
  for (let sound in window.SFX) {
    if (window.SFX.hasOwnProperty(sound)) {
      window.SFX[sound].volume = volume;
    }
  }
};

setVolumeForAllSFX(0.25);