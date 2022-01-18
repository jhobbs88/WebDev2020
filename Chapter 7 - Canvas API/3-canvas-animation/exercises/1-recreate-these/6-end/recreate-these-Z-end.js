const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const numTurns = 30; // The number of turns in the spring

let frameCount = 0;

function main(t) {
  requestAnimationFrame(main);

  // The length of the spring changes in simple harmonic motion, which can be represented mathematically using the sine function
  const springLength = Math.sin(0.1 * frameCount - Math.PI * 0.5) * 300 + 400;        

  // The height of a single turn 
  const turnHeight = springLength / numTurns;
  
  ctx.clearRect(0, 0, 1024, 768);

  ctx.lineWidth = 5;
  
  for (let i = 0; i < numTurns; i++) {
  ctx.beginPath();
    
    // We colour each turn differently
    ctx.strokeStyle = `hsl(${i * 360 / numTurns}, 100%, 50%)`;
    
    // We use the ellipse method to define the path for each turn
    ctx.ellipse(512, i * turnHeight, 100, turnHeight, 0, 0, Math.PI * 2);
    
    ctx.stroke();
  }
  
  frameCount++;
}

main();