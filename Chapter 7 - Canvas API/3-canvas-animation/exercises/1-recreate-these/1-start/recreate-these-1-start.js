const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let squareX = 0;
let squareV = 4;
let squareColour = 'red';

function main() {
  requestAnimationFrame(main);
  
  // ADD CODE HERE
  
  ctx.clearRect(0, 0, 1024, 768);

  ctx.fillStyle = squareColour;
  ctx.fillRect(squareX, 284, 200, 200);
}

main();
