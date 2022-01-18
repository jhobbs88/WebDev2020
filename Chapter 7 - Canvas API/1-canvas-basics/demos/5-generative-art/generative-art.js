const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

for (let i = 0; i < 100; i++) {
  drawRandomRect();
}

function drawRandomRect() {
  ctx.fillStyle = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255}
  )`;
  ctx.fillRect(
    Math.random() * 1024,
    Math.random() * 768,
    Math.random() * 150,
    Math.random() * 150
  );
}
