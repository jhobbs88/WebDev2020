const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(512, 70);
ctx.lineTo(100, 350);
ctx.lineTo(924, 350);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(512, 420);
ctx.lineTo(100, 700);
ctx.lineTo(924, 700);
ctx.fill();