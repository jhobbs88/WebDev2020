const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const tracesCanvas = document.createElement('canvas');
const tracesCtx = tracesCanvas.getContext('2d');
tracesCanvas.width = 1024;
tracesCanvas.height = 768;

tracesCtx.strokeStyle = 'lightblue';

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, Math.PI * 2);
  ctx.stroke();

  tracesCtx.beginPath();
  tracesCtx.arc(x, y, 100, 0, Math.PI * 2);
  tracesCtx.stroke();
}

function changeCirclePosition(event) {
  ctx.clearRect(0, 0, 1024, 768);
  ctx.drawImage(tracesCanvas, 0, 0);
  drawCircle(event.offsetX, event.offsetY);
}

canvas.addEventListener('click', changeCirclePosition);

drawCircle(100, 100);