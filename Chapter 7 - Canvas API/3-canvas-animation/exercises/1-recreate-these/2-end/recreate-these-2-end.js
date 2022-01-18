const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let circleRadius = 0;
let circleGrowth = 4; 

function main() {
  requestAnimationFrame(main);

  // If the radius is greater than 384 we set it to 0 again
  if (circleRadius > 384) {
    circleRadius = 0;
  }

  circleRadius += circleGrowth;

  ctx.clearRect(0, 0, 1024, 768);
  ctx.beginPath();
  ctx.arc(512, 384, circleRadius, 0, Math.PI * 2);
  ctx.fill();
}

main();