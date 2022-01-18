const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2, y = canvas.height / 2;
const iterationsPerFrame = 100;

function main() {
	requestAnimationFrame(main);
	
	for(let i=0; i<iterationsPerFrame; i++){

		// Generate a random number, 0-3
		let r = Math.floor(Math.random() * 4);
	
		// Move in a direction based on the random number
		switch (r) {
			case 0:
				x++;
				break;
			case 1:
				x--;
				break;
			case 2:
				y++;
				break;
			case 3:
				y--;
				break;
			default:
				break;
		}

		// Keep it on the canvas
		if (x < 0) x = 0;
		if (x > canvas.width) x = canvas.width;
		if (y < 0) y = 0;
		if (y > canvas.height) y = canvas.height;
		
		ctx.beginPath();
		ctx.rect(x, y, 1, 1);
		ctx.fill();
	}
}

main();