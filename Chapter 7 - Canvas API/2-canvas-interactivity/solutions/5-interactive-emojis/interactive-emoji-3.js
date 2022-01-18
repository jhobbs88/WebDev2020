const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;

let outerCircle;
let emojiX = 512, emojiY = 150;
let prevMouseX, prevMouseY;
let draggingFlag = false;

function drawEmoji() {
  // Clear the canvas before drawing the emoji 
  ctx.clearRect(0, 0, 1024, 768);

  outerCircle = new Path2D();
  outerCircle.arc(emojiX, emojiY, 150, 0, Math.PI * 2); 

  ctx.fillStyle = 'yellow'
  ctx.fill(outerCircle);
  ctx.stroke(outerCircle);

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(emojiX - 50, emojiY - 50, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(emojiX + 50, emojiY - 50, 15, 0, Math.PI * 2);
  ctx.fill();

  // Draw mouth according to the y-coordinate of the centre of the emoji
  ctx.beginPath();
  if (emojiY <= 384) {
    ctx.arc(emojiX, emojiY, 100, 0, Math.PI);
  } else {
    ctx.arc(emojiX, emojiY + 100, 80, Math.PI * 1.9, Math.PI * 1.1, true);
  }
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