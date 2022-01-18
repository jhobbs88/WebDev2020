const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Circle {
  constructor(positionX, positionY, velocityX, velocityY, radius, color) {
    this.positionX = Math.max(radius, Math.min(1024 - radius, positionX));
    this.positionY = Math.min(768 - radius, positionY);
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = radius;
    this.color = color;
  }
  
  update() {
    if (
      this.positionX > 1024 - this.radius
      || this.positionX < this.radius
    ) {
      this.velocityX *= -1;
    }

    if (this.positionY >= 768 - this.radius) {
      this.velocityY *= -1;
    }

    this.velocityX *= 0.999;
    this.velocityY += 1;
    
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;
    this.positionY = Math.min(768 - this.radius, this.positionY);
  }
  
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const circles = [];
let frameCount = 0;

function main() {
  requestAnimationFrame(main);
  
  if (frameCount % 60 == 0 && circles.length < 50) {
    circles.push(new Circle(
      0,
      Math.random() * 768,
      Math.random() * 10 + 5,
      Math.random() * -20,
      Math.random() * 50 + 20,
      `hsla(
        ${Math.random() * 360},
        ${Math.random() * 50 + 50}%,
        ${Math.random() * 50 + 25}%,
        0.5
      )`
    ));
  }
  
  ctx.clearRect(0, 0, 1024, 768);

  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].draw();
  }
  
  frameCount++;
}

main();