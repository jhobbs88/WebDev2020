const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;

ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.arc(200, 200, 150, 0, Math.PI * 2); 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 280);
ctx.lineTo(250, 280);
ctx.stroke();

// For the eyes we draw two arcs

ctx.beginPath();
ctx.arc(150, 205, 30, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 205, 30, 0, Math.PI);
ctx.stroke();

// We also use arcs for the eyebrows

ctx.beginPath();
ctx.arc(110, 140, 40, Math.PI * 0.1, Math.PI * 0.6);
ctx.stroke();

ctx.beginPath();
ctx.arc(290, 140, 40, Math.PI * 0.4, Math.PI * 0.9);
ctx.stroke();
