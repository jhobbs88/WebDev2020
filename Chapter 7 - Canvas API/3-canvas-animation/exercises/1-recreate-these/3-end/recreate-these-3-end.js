const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let circleRadius = 1;
let circleGrowth = 4; 

function main() {
  requestAnimationFrame(main);

  // We multiply circleGrowth by -1 to reverse the direction of the movement if the circle is too large or too small
  if (circleRadius > 650 || circleRadius <= 0) {
    circleGrowth *= -1;
  }

  circleRadius += circleGrowth;
  
  // To fix Uncaught DOMException: Failed to execute 'arc' on 'CanvasRenderingContext2D': The radius provided (-4) is negative.
  circleRadius = Math.max(0, circleRadius);
  
  // Change in radius corresponds to change in colour
  ctx.fillStyle = `rgb(255, ${Math.min(255, circleRadius / 2)}, 0)`;
  
  ctx.clearRect(0, 0, 1024, 768);
  ctx.beginPath();
  ctx.arc(512, 384, circleRadius, 0, Math.PI * 2);
  ctx.fill();
}

main();