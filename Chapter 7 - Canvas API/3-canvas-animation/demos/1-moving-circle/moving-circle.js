const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let circleX = -50;
 
function main() {
  requestAnimationFrame(main);

  circleX += 1;

  ctx.clearRect(0, 0, 1024, 768);
  ctx.beginPath();
  ctx.arc(circleX, 384, 50, 0, Math.PI * 2);
  ctx.fill();
}

main();