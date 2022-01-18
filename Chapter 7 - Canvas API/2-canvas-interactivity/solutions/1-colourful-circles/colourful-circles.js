const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let drawingFlag = false;

function startDrawing() {
  drawingFlag = true;
}

function drawCircle(event) {
  if (!drawingFlag) return;

  // Use random colour
  ctx.fillStyle = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255}
  )`;
  ctx.beginPath();
                                      // Random radius (25-100)
  ctx.arc(event.offsetX,event.offsetY, Math.random() * 75 + 25, 0, Math.PI * 2);
  ctx.fill();
}

function stopDrawing() {
  drawingFlag = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawCircle);
canvas.addEventListener('mouseup', drawCircle);
addEventListener('mouseup', stopDrawing);