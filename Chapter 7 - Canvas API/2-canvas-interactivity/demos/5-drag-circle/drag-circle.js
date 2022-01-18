const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let circleX = 100;
let circleY = 100;
let circlePath;

let prevMouseX, prevMouseY;

let draggingFlag = false;

function drawCircle(x, y) {
  circlePath = new Path2D();
  circlePath.arc(x, y, 100, 0, Math.PI * 2);
  ctx.stroke(circlePath);
}

function startDragging(event) {
  if (
    ctx.isPointInPath(circlePath, event.offsetX, event.offsetY)
    || ctx.isPointInStroke(circlePath, event.offsetX, event.offsetY)
  ) {
    draggingFlag = true;

    prevMouseX = event.offsetX;
    prevMouseY = event.offsetY;
  }
}

function dragCircle(event) {
  if (!draggingFlag) return;

  circleX += event.offsetX - prevMouseX;
  circleY += event.offsetY - prevMouseY;

  ctx.clearRect(0, 0, 1024, 768);
  drawCircle(circleX, circleY);

  prevMouseX = event.offsetX;
  prevMouseY = event.offsetY;
}

function stopDragging(event) {
  draggingFlag = false;
}

canvas.addEventListener('mousedown', startDragging);
canvas.addEventListener('mousemove', dragCircle);
addEventListener('mouseup', stopDragging);

drawCircle(100, 100);