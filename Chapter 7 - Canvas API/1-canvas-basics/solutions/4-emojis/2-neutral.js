const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
      
ctx.lineWidth = 4;

ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.arc(200, 200, 150, 0, Math.PI * 2); 
ctx.fill();
ctx.stroke();

// For the mouth, we draw a straight line
ctx.beginPath();
ctx.moveTo(150, 260);
ctx.lineTo(250, 260);
ctx.stroke();

ctx.fillStyle = 'black';

ctx.beginPath();
ctx.arc(150, 150, 15, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 15, 0, Math.PI * 2);
ctx.fill();