const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;

// The outer circle
ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.arc(200, 200, 150, 0, Math.PI * 2); 
ctx.fill();
ctx.stroke();

// The mouth
ctx.beginPath();
ctx.fillStyle = 'black'
ctx.arc(200, 220, 100, 0, Math.PI);
ctx.fill();

// The tongue
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(165, 235);
ctx.lineTo(165, 315);
ctx.arc(200, 305, 35, Math.PI, 0, true);
ctx.lineTo(235, 315);
ctx.lineTo(235, 235);
ctx.fill();
ctx.beginPath();
ctx.strokeStyle = '#AA0000'; /* darker red */
ctx.lineWidth = 10;
ctx.moveTo(200, 235);
ctx.lineTo(200, 310);
ctx.stroke();

// The left eye
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.arc(140, 170, 30, Math.PI * 1.9, Math.PI * 1.1, true);
ctx.stroke();

// The outer right eye
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(260, 150, 42, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// The inner right eye
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(260, 150, 15, 0, Math.PI * 2);
ctx.fill();      