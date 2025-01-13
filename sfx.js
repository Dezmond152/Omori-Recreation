window.SFX = {
  doorEnter : new Audio('./sfx/DoorEnter.ogg'),
  doorExit : new Audio('./sfx/DoorExit.ogg'),
  House : new Audio ('./sfx/House.ogg'),
  House1 : new Audio ('./sfx/House1.ogg'),
}



window.SFX.doorEnter.volume = 0.25;
window.SFX.doorExit.volume = 0.25;
window.SFX.House.volume = 0.05;
window.SFX.House1.volume = 0.05;


document.addEventListener('click', () => {
  window.SFX.House.play();
});