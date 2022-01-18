const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


let x = 70, y = 25; // Start position
let dx = 8, dy = 8; // Horizontal and vertical velocity

function main() {
  requestAnimationFrame(main);

	x += dx;
	y += dy;

	// When the square reaches the left or right edge, we multiply dx by -1 to reverse the direction and change the color
	if (x < 0 || x > 824) {
		dx *= -1;
		changeColor();
	}
	
	// When the square reaches the top or bottom edge, we multiply dy by -1 to reverse the direction and change the color
	if (y < 0 || y > 568) {
		dy *= -1;
		changeColor();
	}
	
	ctx.clearRect(0, 0, 1024, 768);
  ctx.fillRect(x, y, 200, 200);
	
}

function changeColor(){
	// Set a random fill color
	ctx.fillStyle = `hsl(${Math.floor( Math.random() * 360 )}, 100%, 50%)`;
}

main();