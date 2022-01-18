const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Thick lines
ctx.lineWidth = 4;

// Define a Path2D object for the emoji's outer circle
const outerCircle = new Path2D();
outerCircle.arc(200, 200, 150, 0, Math.PI * 2);

let isHappy = true;

function drawEmoji() {
  // Draw the outer circle
  ctx.fillStyle = 'yellow'
  ctx.fill(outerCircle);
  ctx.stroke(outerCircle);

  // Draw the eyes
  
  ctx.fillStyle = 'black';

  ctx.beginPath();
  ctx.arc(150, 150, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(250, 150, 15, 0, Math.PI * 2);
  ctx.fill();

  // Draw the mouth according to mood
  ctx.beginPath();
  if (isHappy) {
    ctx.arc(200, 200, 100, 0, Math.PI);
  } else {
    ctx.arc(200, 300, 80, Math.PI * 1.9, Math.PI * 1.1, true);
  }
  ctx.stroke();
}

function changeMood(event) {
  // Check whether user click in/on circle
  if (
    ctx.isPointInPath(outerCircle, event.offsetX, event.offsetY)
    || ctx.isPointInStroke(outerCircle, event.offsetX, event.offsetY)
  ) {
    isHappy = !isHappy;

    ctx.clearRect(0, 0, 400, 400);
    drawEmoji();
  }
}

canvas.addEventListener('click', changeMood);

drawEmoji();