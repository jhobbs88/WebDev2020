const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


// To avoid drawing the 'netural' and 'winky tongue' emojies again and again, we draw them once on two off-screen canvases.
// We will then copy the content of these canvases using the drawImage method.


// Neutral emoji

const neutralCanvas = document.createElement('canvas');
const neutralCtx = neutralCanvas.getContext('2d');
neutralCanvas.width = 300;
neutralCanvas.height = 300;

neutralCtx.lineWidth = 4;

// The mouth
neutralCtx.beginPath();
neutralCtx.moveTo(100, 210);
neutralCtx.lineTo(200, 210);
neutralCtx.stroke();

// The eyes
neutralCtx.fillStyle = 'black';
neutralCtx.beginPath();
neutralCtx.arc(90, 100, 15, 0, Math.PI * 2);
neutralCtx.fill();
neutralCtx.beginPath();
neutralCtx.arc(210, 100, 15, 0, Math.PI * 2);
neutralCtx.fill();


// Winky tongue emoji

const winkyTongueCanvas = document.createElement('canvas');
const winkyTongueCtx = winkyTongueCanvas.getContext('2d');
winkyTongueCanvas.width = 300;
winkyTongueCanvas.height = 300;

// The mouth
winkyTongueCtx.beginPath();
winkyTongueCtx.fillStyle = 'black'
winkyTongueCtx.arc(150, 170, 100, 0, Math.PI);
winkyTongueCtx.fill();

// The tongue
winkyTongueCtx.beginPath();
winkyTongueCtx.fillStyle = 'red';
winkyTongueCtx.moveTo(115, 185);
winkyTongueCtx.lineTo(115, 265);
winkyTongueCtx.arc(150, 255, 35, Math.PI, 0, true);
winkyTongueCtx.lineTo(185, 265);
winkyTongueCtx.lineTo(185, 185);
winkyTongueCtx.fill();
winkyTongueCtx.beginPath();
winkyTongueCtx.strokeStyle = '#AA0000'; /* darker red */
winkyTongueCtx.lineWidth = 10;
winkyTongueCtx.moveTo(150, 185);
winkyTongueCtx.lineTo(150, 260);
winkyTongueCtx.stroke();

// The left eye
winkyTongueCtx.beginPath();
winkyTongueCtx.strokeStyle = 'black';
winkyTongueCtx.lineWidth = 4;
winkyTongueCtx.arc(90, 120, 30, Math.PI * 1.9, Math.PI * 1.1, true);
winkyTongueCtx.stroke();

// The right eye
winkyTongueCtx.beginPath();
winkyTongueCtx.fillStyle = 'white';
winkyTongueCtx.arc(210, 100, 42, 0, Math.PI * 2);
winkyTongueCtx.fill();
winkyTongueCtx.stroke();
winkyTongueCtx.beginPath();
winkyTongueCtx.fillStyle = 'black';
winkyTongueCtx.arc(210, 100, 15, 0, Math.PI * 2);
winkyTongueCtx.fill();      


// This canvas will be used for the colourful circles
var colourfulCanvas = document.createElement('canvas');
var colourfulCtx = colourfulCanvas.getContext('2d');
colourfulCanvas.width = 1024;
colourfulCanvas.height = 768;


//
//
// Preparatory drawing is done!
//
//





//
// The following is just a more elaborate variation of the drag-circle example
//


let emojiX = 512, emojiY = 384; // Corresponds to circleX and circleY
let outerCircle; // Corresponds to circlePath
let prevMouseX, prevMouseY; // Corresponds to prevMouseX and prevMouseY
let isNeutral = true; // Store emoji's mood

// Helper function to draw the emoji
// Draw outer circle and copy the content of the appropriate canvas
function drawEmoji() {
  outerCircle = new Path2D();
  outerCircle.arc(emojiX, emojiY, 150, 0, Math.PI * 2);

  ctx.fillStyle = 'yellow'
  ctx.fill(outerCircle);
  ctx.stroke(outerCircle);

  if (isNeutral) {
    ctx.drawImage(neutralCanvas, emojiX - 150, emojiY - 150);
  } else {
    ctx.drawImage(winkyTongueCanvas, emojiX - 150, emojiY - 150);
  }
}

// Corresponds to startDragging
function setToWinkyTongue(event) {
  if (
    ctx.isPointInPath(outerCircle, event.offsetX, event.offsetY)
    || ctx.isPointInStroke(outerCircle, event.offsetX, event.offsetY)
  ) {
    isNeutral = false;

    prevMouseX = event.offsetX;
    prevMouseY = event.offsetY;

    drawEmoji();
  }      
}

// Corresponds to dragCircle
function dragEmoji(event) {
  if (isNeutral) return false;
  
  emojiX += event.offsetX - prevMouseX;
  emojiY += event.offsetY - prevMouseY;

  prevMouseX = event.offsetX;
  prevMouseY = event.offsetY;

  // Draw colourful circles while dragging the emoji
  colourfulCtx.fillStyle = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255}
  )`;
  colourfulCtx.beginPath();
  colourfulCtx.arc(emojiX, emojiY, Math.random() * 75 + 25, 0, Math.PI * 2);
  colourfulCtx.fill();          

  ctx.clearRect(0, 0, 1024, 768);
  ctx.drawImage(colourfulCanvas, 0, 0);
  drawEmoji();
}

// Corresponds to stopDragging
function setToNeutral() {
  isNeutral = true;

  ctx.clearRect(0, 0, 1024, 768);
  colourfulCtx.clearRect(0, 0, 1024, 768); // Also, clear the colourful circles canvas
  drawEmoji();
}

canvas.addEventListener('mousedown', setToWinkyTongue);
canvas.addEventListener('mousemove', dragEmoji);
addEventListener('mouseup', setToNeutral)

// Init emoji
setToNeutral();