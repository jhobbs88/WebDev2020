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
	
	for(let i=0; i<20; i++){
		
		let yOffset = // ADD CODE HERE - Hint: use the Math.sin() function, counter, i, wavelength, and amplitude

		ctx.beginPath();

		ctx.arc(
      // ADD CODE HERE
		);

		ctx.fillStyle = 'steelblue';
		ctx.fill();
	}
  
  counter+= speed;
}

main();