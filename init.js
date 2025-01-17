const disclamer = document.getElementById('disclamer');
const disclamerButton = document.getElementById('d-button');
const disclamerText = document.getElementById('d-text');

disclamerButton.addEventListener("click", () => {
	disclamer.style.animation = '1s fading-bc-rev forwards';
	disclamerText.style.animation = '1s fading-rev forwards';
	disclamerButton.style.animation = '1s fading-rev forwards';
	setTimeout(() => {
		disclamer.remove();
		window.SFX.Title.play();
	},1000)
})


const menu = document.getElementById('menu')
const playButton = document.getElementById('m-button');
const gameCan = `
<div id="game-containe-wrap">
  <div class="game-container">
    <div id="discript-wrapper"></div>
    <canvas class="game-canvas" width="480" height="640"></canvas>
  </div>
</div>
`;
let pressed = false;


playButton.addEventListener("click", () => {
	if(pressed === false){
		pressed	= true;

		document.body.insertAdjacentHTML('afterbegin', `<div id="black-screen"></div>`);

		setTimeout(() => {
			document.body.insertAdjacentHTML('afterbegin', gameCan);
			document.body.style.backgroundImage = 'none';
			document.body.style.overflow = "auto";
	
			window.SFX.Title.pause();
			window.SFX.Title.currentTime = 0;
	
			menu.remove();
	
			initGame()
		},3000)
	}
})

const menuButtons = document.getElementsByClassName('m-button')


Array.from(menuButtons).forEach(button => {
	button.addEventListener("mouseenter", () => {
		window.SFX.MenuHover.play();
	});

	button.addEventListener("click", () => {
		window.SFX.MenuPress.play();
	});
});

window.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
  }
});

const guide = document.getElementById('guide')
guide.addEventListener('mouseenter', () => {
	const guideWrapper = document.getElementById('guide-info-wrap')
	const guide = `
	<div id="guide-info">
    <img src="./sprites/others/guide.png" alt="#" draggable="false">
  </div>
	`
	window.SFX.MenuHover.play();
	guideWrapper.insertAdjacentHTML('afterbegin', guide)
});

guide.addEventListener('mouseleave', () => {
  const guideInfo = document.getElementById('guide-info');
  guideInfo.style.animation = 'none';
  guideInfo.offsetHeight; 

  guideInfo.style.animation = 'slideUp 0.5s forwards'; 

  setTimeout(() => {
    guideInfo.remove();
  }, 500); 
});


function sunnyAnimation() {
	const sunnySpriteDiv = document.getElementById('sunny-sprite');
	const img = sunnySpriteDiv.getElementsByTagName('img')[0];

	const frame1 = './sprites/others/Sunny-menu/Sunny-menu-1.png';
	const frame2 = './sprites/others/Sunny-menu/Sunny-menu-2.png';
	const frame3 = './sprites/others/Sunny-menu/Sunny-menu-3.png';

	const frames = [frame1, frame2, frame3];
	let currentFrame = 0;
	
	function cyclicFunction() {
		currentFrame = (currentFrame + 1) % frames.length; 
    img.src = frames[currentFrame]; 
	}
	setInterval(cyclicFunction, 400);
}


function titleAnimation() {
	const titleanimDiv = document.getElementById('title-anim');
	const img = titleanimDiv.getElementsByTagName('img')[0];

	const frame1 = './sprites/others/Title-menu/Title-menu-anim-1.png';
	const frame2 = './sprites/others/Title-menu/Title-menu-anim-2.png';
	const frame3 = './sprites/others/Title-menu/Title-menu-anim-3.png';

	const frames = [frame1, frame2, frame3];
	let currentFrame = 0;
	
	function cyclicFunction() {
		currentFrame = (currentFrame + 1) % frames.length; 
    img.src = frames[currentFrame]; 
	}
	setInterval(cyclicFunction, 350);
}

sunnyAnimation()
titleAnimation()



function initGame() {

	const overworld = new Overworld({
		element: document.querySelector('.game-container')
	});

	
	overworld.init();
	window.SFX.House.play();

};