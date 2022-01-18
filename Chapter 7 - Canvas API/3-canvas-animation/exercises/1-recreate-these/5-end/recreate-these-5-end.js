const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let counter = 0;
let speed = 0.1;
let amplitude = 25;
let wavelength = 1.6;
let radius = 20;

function main() {
	requestAnimationFrame(main);
	
	ctx.clearRect(0, 0, 1024, 768);
	
	// Draw 20 circles to the screen
	for(let i=0; i<20; i++){
		
		// The sin function will oscillate between -1 and 1 with a period of 2π
		let yOffset = amplitude * Math.sin(counter - i / wavelength);

		ctx.beginPath();

		ctx.arc(
      i * 50 + 25,
      canvas.height / 2 + yOffset,
      radius,
      0,
      Math.PI * 2
		);

		ctx.fillStyle = 'steelblue';
		ctx.fill();
	}
  
  counter+= speed;
}

main();