const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;

let outerCircle;
let emojiX = 512, emojiY = 150;
let prevMouseX, prevMouseY;
let draggingFlag = false;

function drawEmoji() {
  ctx.clearRect(0, 0, 1024, 768);
  
  outerCircle = new Path2D();
  outerCircle.arc(emojiX, emojiY, 150, 0, Math.PI * 2); 

  ctx.fillStyle = 'yellow'
  ctx.fill(outerCircle);
  ctx.stroke(outerCircle);

  // Draw Eyes

  // Transform emojiX to inner eye offset between -18 and 18 pixels
  const eyeOffset = emojiX / 1024 * 36 - 18;
  
  // Outer eyes
  ctx.fillStyle = 'white'
  ctx.beginPath();
  ctx.arc(emojiX - 50, emojiY - 50, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(emojiX + 50, emojiY - 50, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Inner eyes
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(emojiX - 50 + eyeOffset, emojiY - 50, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(emojiX + 50 + eyeOffset, emojiY - 50, 7, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw mouth
  
  // Transform emojiY to mouth curve (value between 0 to 1)
  const mouthCurve = emojiY / 768;
  
  ctx.beginPath();
  ctx.moveTo(
    emojiX - 80,
    emojiY + mouthCurve * 90 + (1 - mouthCurve) * 40
  );
  ctx.quadraticCurveTo(
    emojiX,
    emojiY + (0.95 - mouthCurve) * 150,
    emojiX + 80,
    emojiY + mouthCurve * 90 + (1 - mouthCurve) * 40
  );
  ctx.stroke();  
}

function startDragging(event) {
  if (
    ctx.isPointInPath(outerCircle, event.offsetX, event.offsetY)
    || ctx.isPointInStroke(outerCircle, event.offsetX, event.offsetY)
  ) {
    draggingFlag = true;
    prevMouseX = event.offsetX;
    prevMouseY = event.offsetY;
  }
}

function dragEmoji(event) {
  if (!draggingFlag) return;
  
  emojiX += event.offsetX - prevMouseX;
  emojiY += event.offsetY - prevMouseY;

  drawEmoji();

  prevMouseX = event.offsetX;
  prevMouseY = event.offsetY;
}

function nudgeEmoji(event) {
  if (event.key == 'ArrowLeft') {
    emojiX -= 10;
  } else if (event.key == 'ArrowRight') {
    emojiX += 10;
  } else if (event.key == 'ArrowUp') {
    emojiY -= 10;
  } else if (event.key == 'ArrowDown') {
    emojiY += 10;
  }

  drawEmoji();
}

function stopDragging() {
  draggingFlag = false;
}

canvas.addEventListener('mousedown', startDragging);
canvas.addEventListener('mousemove', dragEmoji);
addEventListener('mouseup', stopDragging);
addEventListener('keydown', nudgeEmoji);

drawEmoji();