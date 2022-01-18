const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


let x = 70, y = 25; // Start position
let dx = 8, dy = 8; // Horizontal and vertical velocity

function main() {
  requestAnimationFrame(main);

	// ADD CODE HERE
	
	ctx.clearRect(0, 0, 1024, 768);
  ctx.fillRect(x, y, 200, 200);
	
}

function changeColor(){
	// Set a random fill color
	// ADD CODE HERE
}

main();