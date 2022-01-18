const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 4;

ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.arc(200, 200, 150, 0, Math.PI * 2); 
ctx.fill();
ctx.stroke();

// Like original mouth, just a slightly shorter arc (but same radius)
ctx.beginPath();
ctx.arc(200, 200, 100, Math.PI * 0.1, Math.PI * 0.9);
ctx.stroke();      

/*
  the eyes are replaced with two hearts.

  to draw the hearts we adapt this example from MDN, which demonstrates Bezier and quadratic curves: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Bezier_and_quadratic_curves.

  the fillHeart function we define draws a filled heart whose centre is determined by the x and y parameters (an improvement can be to also have a size parameter determining the size of the heart).

  Bezier curves involve quite a lot of math, therefore, they are beyond the scope of this module. those who are interested to learn more will find the following resource useful: https://pomax.github.io/bezierinfo/ 
*/

function fillHeart(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y - 32.5);
  ctx.bezierCurveTo(x, y - 35.5, x - 5, y - 47.5, x - 25, y - 47.5);
  ctx.bezierCurveTo(x - 55, y - 47.5, x - 55, y - 10, x - 55, y - 10);
  ctx.bezierCurveTo(x - 55, y + 7.5, x - 35, y + 29.5, x, y + 47.5);
  ctx.bezierCurveTo(x + 35, y + 29.5, x + 55, y + 7.5, x + 55, y - 10);
  ctx.bezierCurveTo(x + 55, y - 10, x + 55, y - 47.5, x + 25, y - 47.5);
  ctx.bezierCurveTo(x + 10, y - 47.5, x, y - 35.5, x, y - 32.5);
  ctx.fill();
}

ctx.fillStyle = 'red';
fillHeart(135, 160);      
fillHeart(265, 160);