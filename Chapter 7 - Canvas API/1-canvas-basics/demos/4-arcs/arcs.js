const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(137, 250, 100, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(387, 250, 100, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(637, 250, 100, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(887, 250, 100, 0, Math.PI, true);
ctx.fill();

ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(137, 500, 100, Math.PI, Math.PI * 1.5);
ctx.stroke();

ctx.fillStyle = 'lightblue';
ctx.beginPath();
ctx.arc(387, 500, 100, 0, Math.PI * 1.5);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'rgb(0, 120, 30)';
ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
ctx.beginPath();
ctx.arc(637, 500, 100, 0, Math.PI * 1.5);
ctx.lineTo(637, 500);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#c000c0';
ctx.strokeStyle = 'hsl(0, 75%, 25%)'
ctx.beginPath();
ctx.arc(887, 500, 100, Math.PI * 0.2, Math.PI * 1.8);
ctx.arc(910, 500, 80, Math.PI * 1.8, Math.PI * 0.2, true);
ctx.closePath();
ctx.fill();
ctx.stroke();
