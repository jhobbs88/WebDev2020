const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, Math.PI * 2);
  ctx.stroke();
}

function changeCirclePosition(event) {
  ctx.clearRect(0, 0, 1024, 768);
  drawCircle(event.offsetX, event.offsetY);
}

canvas.addEventListener('click', changeCirclePosition);

drawCircle(100, 100);
