window.SFX = {
  doorEnter : new Audio('./sfx/DoorEnter.ogg'),
  doorExit : new Audio('./sfx/DoorExit.ogg'),
  House : new Audio ('./sfx/House.ogg'),
  Title : new Audio ('./sfx/Title.ogg'),
  text : new Audio ('./sfx/text1.ogg')
}



window.SFX.doorEnter.volume = 0.25;
window.SFX.doorExit.volume = 0.25;
window.SFX.House.volume = 0.05;
window.SFX.Title.volume = 0.25;
window.SFX.text.volume = 0.25;


// document.addEventListener('click', () => {
//   window.SFX.House.play();
// });