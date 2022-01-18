const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let squareX = 0;
let squareV = 4;
let squareColour = 'red';

function main() {
  requestAnimationFrame(main);
  
  if (squareX > 824) {
    
    // The square reaches the right edge of the canvas if the x-coordinate of its top-left corner is greater than 1024, the width of the canvas, minus 200, the width of the square.
    
    squareV = -4;
    squareColour = 'blue';
    
  } else if (squareX < 0) {
    
    // The square reaches the left edge of the canvas if the x-coordinate of its top-left corner is less than 0.
    
    squareV = 4;
    squareColour = 'red';
    
  }

  squareX += squareV;
  
  ctx.clearRect(0, 0, 1024, 768);

  ctx.fillStyle = squareColour;
  ctx.fillRect(squareX, 284, 200, 200);
}

main();
