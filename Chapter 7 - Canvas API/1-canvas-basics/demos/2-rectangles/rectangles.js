const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(100, 50, 300, 150);

ctx.fillStyle = 'red';
ctx.fillRect(200, 400, 50, 120);

ctx.strokeStyle = 'blue';
ctx.lineWidth = 4;
ctx.strokeRect(500, 125, 80, 600);

ctx.fillRect(700, 250, 280, 100);
ctx.strokeRect(700, 250, 280, 100);
