const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let positionX = 512;
let positionY = 384;
let velocityX = 10;
let velocityY = 10;
 
function main() {
  requestAnimationFrame(main);
      
  if (positionX > 974 || positionX < 50) {
    velocityX *= -1;
  }
  
  if (positionY > 718 || positionY < 50) {
    velocityY *= -1;
  }
  
  positionX += velocityX;
  positionY += velocityY;
  
  ctx.clearRect(0, 0, 1024, 768);
  ctx.beginPath();
  ctx.arc(positionX, positionY, 50, 0, Math.PI * 2);
  ctx.fill();
}

main();