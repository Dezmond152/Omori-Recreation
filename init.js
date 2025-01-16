disclamer = document.getElementById('disclamer');
disclamerButton = document.getElementById('d-button');
disclamerText = document.getElementById('d-text');

disclamerButton.addEventListener("click", () => {
	disclamer.style.animation = '1s fading-bc-rev forwards';
	disclamerText.style.animation = '1s fading-rev forwards';
	disclamerButton.style.animation = '1s fading-rev forwards';
	setTimeout(() => {
		disclamer.remove();
		window.SFX.Title.play();
	},1000)
})


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

};

// document.addEventListener('click', () => {
// 	setTimeout(() => {
// 		const menu = document.getElementById('menu')
// 		menu.remove();

// 		document.body.style.backgroundImage = 'none';
// 		document.body.style.overflow = "auto";
		
// 		initGame();
// 	}, 1000)
// });
