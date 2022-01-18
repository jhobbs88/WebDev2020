const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// The flag of Armenia

// Colour specifications were taken from https://en.wikipedia.org/wiki/Flag_of_Armenia

ctx.fillStyle = '#D90012';
ctx.fillRect(50, 50, 270, 60);

ctx.fillStyle = '#0033A0';
ctx.fillRect(50, 110, 270, 60); // 110 = 50 + 60

ctx.fillStyle = '#F2A800';
ctx.fillRect(50, 170, 270, 60); // 170 = 50 + 60 + 60

ctx.strokeStyle = 'lightgray';
ctx.lineWidth = 2;
ctx.strokeRect(50, 50, 270, 180);
