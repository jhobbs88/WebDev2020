const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let drawingFlag = false;

// Variables to store previous mouse coordinates
let prevMouseX, prevMouseY;

function startDrawing() {
  drawingFlag = true;
  
  // Init prevMouseX and prevMouseY
  prevMouseX = event.offsetX;
  prevMouseY = event.offsetY;
}

function drawLine(event) {
  if (!drawingFlag) return;

  ctx.beginPath();
  
  // We replace the following line with calls to moveTo and lineTo to draw a line between the stored mouse coordinates and the current ones
  // ctx.arc(event.offsetX,event.offsetY, 100, 0, Math.PI * 2);

  let startX = prevMouseX;
  let startY = prevMouseY;
  let endX = event.offsetX;
  let endY = event.offsetY;
  
  // Draw at least one pixel, even if user hasn't moved the mouse between mousedown and mouseup
  if (startX == endX && startY == endY) {
    endX += 1;
    endY += 1;
  }
  
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  
  // Update prevMouseX and prevMouseY
  prevMouseX = event.offsetX;
  prevMouseY = event.offsetY;
}

function stopDrawing() {
  drawingFlag = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', drawLine);
addEventListener('mouseup', stopDrawing);