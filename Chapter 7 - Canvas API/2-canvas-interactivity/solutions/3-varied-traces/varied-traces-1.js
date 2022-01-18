const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const tracesCanvas = document.createElement('canvas');
const tracesCtx = tracesCanvas.getContext('2d');
tracesCanvas.width = 1024;
tracesCanvas.height = 768;

tracesCtx.strokeStyle = 'lightblue';

// Define reusable 'circle' function
// The ctx parameter allow us to pass whatever context we want to use
function circle(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, Math.PI * 2);
  ctx.stroke();
}

// Only draw traces
function drawTraces(event) {
  ctx.clearRect(0, 0, 1024, 768);
  circle(tracesCtx, event.offsetX, event.offsetY);
  ctx.drawImage(tracesCanvas, 0, 0);
}

// Only draw black circle
function drawCircle(event) {
  ctx.clearRect(0, 0, 1024, 768);
  circle(ctx, event.offsetX, event.offsetY);
}

// Break down 'click' into 'mousedown' and 'mouseup'
canvas.addEventListener('mousedown', drawTraces);
canvas.addEventListener('mouseup', drawCircle);

// First circle
circle(tracesCtx, 100, 100);
circle(ctx, 100, 100);
