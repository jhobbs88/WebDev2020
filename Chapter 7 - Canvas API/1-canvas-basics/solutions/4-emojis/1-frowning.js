const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;

ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.arc(200, 200, 150, 0, Math.PI * 2); 
ctx.fill();
ctx.stroke();

// For the mouth, we draw an arc counterclockwise from 342 degrees to 198 degrees with a slightly smaller radius than before (80 instead of 100)
ctx.beginPath();
ctx.arc(200, 300, 80, Math.PI * 1.9, Math.PI * 1.1, true);
ctx.stroke();

ctx.fillStyle = 'black';

ctx.beginPath();
ctx.arc(150, 150, 15, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 15, 0, Math.PI * 2);
ctx.fill();