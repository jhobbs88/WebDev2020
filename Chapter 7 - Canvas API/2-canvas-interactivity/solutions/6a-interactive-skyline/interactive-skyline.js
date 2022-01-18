const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

function addBuilding(event) {
  const y = event.offsetY;
  const h = 768 - y;  
  const w = Math.random() * 100 + 50;
  const x = event.offsetX - w / 2; // Divide by 2 to centre building around mouse

  ctx.fillRect(x, y, w, h);
}

canvas.addEventListener('click', addBuilding);
