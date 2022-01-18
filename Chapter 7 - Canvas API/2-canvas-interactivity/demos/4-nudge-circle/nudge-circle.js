const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let circleX = 100;
let circleY = 100;
let stepSize = 10;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, Math.PI * 2);
  ctx.stroke();
}

function nudgeCircle(event) {
  if (event.key == 'ArrowLeft') {
    circleX -= stepSize;
  } else if (event.key == 'ArrowRight') {
    circleX += stepSize;
  } else if (event.key == 'ArrowUp') {
    circleY -= stepSize;
  } else if (event.key == 'ArrowDown') {
    circleY += stepSize;
  }


  ctx.clearRect(0, 0, 1024, 768);
  drawCircle(circleX, circleY);
}

function applyLargeSteps(event) {
  if (event.key == 'Shift') {
    stepSize = 100;
  }
}

function applySmallSteps(event) {
  if (event.key == 'Shift') {
    stepSize = 10;
  }
}

addEventListener('keydown', nudgeCircle);
addEventListener('keydown', applyLargeSteps);
addEventListener('keyup', applySmallSteps);

drawCircle(circleX, circleY);
