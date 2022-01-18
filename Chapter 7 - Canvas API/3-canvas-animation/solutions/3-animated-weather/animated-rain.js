const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Drop {
  constructor() {
    // Drops are drawn as lines
    
    // The x- and y-coordinates of the starting point of the line
    this.x = Math.random() * 1024;
    this.y = Math.random() * -200;
    
    // How slanted the line is
    this.drift = Math.random() - 0.5;
    
    // The length and thickness of the line
    this.length = Math.random() * 30 + 5;
    this.thickness = Math.random() * 3;
    
    // The colour is a shade of pale blue
    this.colour = `hsl(240, 20%, ${Math.random() * 50 + 25}%)`; 
  }
  
  update() {
    this.x += this.drift;
    
    // All drops fall at the same speed
    this.y += 20
  }
  
  draw() {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.colour;
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + this.drift, this.y + this.length);
    ctx.stroke();
  }
}

const drops = [];
let frameCount = 0;

function main() {
  requestAnimationFrame(main);
  
  ctx.clearRect(0, 0, 1024, 768);
  
  ctx.fillStyle = '#002';
  ctx.fillRect(0, 0, 1024, 768);

  if (drops.length < 500) {
    // Every frame we create 5 new drops
    
    for (let i = 0; i < 5; i++) {
      drops.push(new Drop());
    }
  }
  
  for (let i = drops.length - 1; i >= 0; i--) {
    drops[i].update();
    drops[i].draw();
    
    if (drops[i].y > 768) {
      drops.splice(i, 1);
    }
  }
    
  frameCount++;
}

// Initialise rain before starting the animation loop
for (let i = 0; i < 100; i++) {
  const drop = new Drop();
  
  // Update each drop a random number of times
  const progress = Math.random() * 35;
  for (let j = 0; j < progress; j++) {
    drop.update();
  }
  
  drops.push(drop);
}

// Start the animation loop
main();
