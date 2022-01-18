const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let positionX = 51;
let positionY = 150;
let velocityX = 15;
let velocityY = -15;

function main() {
  requestAnimationFrame(main);
  
  if (positionX > 974 || positionX < 50) {
    velocityX *= -1;
  }
  
  if (positionY >= 718) {
    velocityY *= -1;
  }
  
  velocityY += 1;
  velocityX *= 0.999;
  
  positionX += velocityX;
  positionY += velocityY;
  positionY = Math.min(718, positionY);

  ctx.clearRect(0, 0, 1024, 768);
  ctx.beginPath();
  ctx.arc(positionX, positionY, 50, 0, Math.PI * 2);
  ctx.fill();
}

main();