const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Bubble {
  constructor() {
    this.positionX = Math.random() * 1024;
    this.positionY = 800;
    this.velocityY = Math.random() * -1 - 1;
    this.velocityX = 0;
    this.radius = Math.random() * 20 + 5;
    this.alpha = Math.random() * 0.75 + 0.25;
  }
  
  update() {
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;
    
    this.velocityX += Math.random() * 0.2 - 0.1;
    
    if (this.velocityX > 2 || this.velocityX < -2) {
      this.velocityX *= -0.2;
    }
  }
  
  draw() {
    ctx.globalAlpha = this.alpha;
    
    const bubbleGradient = ctx.createRadialGradient(
      this.positionX, this.positionY, Math.max(this.radius - 8, 1),
      this.positionX, this.positionY, this.radius
    );
    bubbleGradient.addColorStop(0, '#fff2');
    bubbleGradient.addColorStop(1, '#bbb');
    
    ctx.globalCompositeOperation = 'xor'
    ctx.fillStyle = bubbleGradient;
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }
}

const bubbles = [];
let frameCount = 0;

const backgroundGradient = ctx.createLinearGradient(0, 0, 0, 768);
backgroundGradient.addColorStop(0, 'hsl(200, 100%, 80%)');
backgroundGradient.addColorStop(1, 'hsl(200, 100%, 20%)');

function main() {
  requestAnimationFrame(main);
  
  ctx.clearRect(0, 0, 1024, 768);
  
  ctx.globalAlpha = 1;
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, 1024, 768);
  
  if (frameCount % 5 == 0 && bubbles.length < 100) {
    bubbles.push(new Bubble());
  }
  
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].draw();
    
    if (bubbles[i].positionY < 0 - bubbles[i].radius) {
      bubbles.splice(i, 1);
    }
  }
    
  frameCount++;
}

main();