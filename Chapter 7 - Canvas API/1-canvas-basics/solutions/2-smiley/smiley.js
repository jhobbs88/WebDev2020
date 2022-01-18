  const canvas = document.getElementById('my-canvas');
  const ctx = canvas.getContext('2d');

  // Drawing the outer circle: the centre is point B (200, 200), and the radius can be calculated by subtracting the y-coordinate of point A (50) from the y-coordinate of point B (200)
  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, Math.PI * 2); 
  ctx.stroke();

  // Drawing the mouth: the centre is also point B (200, 200), and the radius can be calculated by subtracting the x-coordinate of point B (200) from the x-coordinate of point C (300)
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, Math.PI);
  ctx.stroke();

  // Drawing the left eye: the centre is point D (150, 150), and the radius can be calculated by subtracting the x-coordinate of point E (165) from the x-coordinate of point D (150)
  ctx.beginPath();
  ctx.arc(150, 150, 15, 0, Math.PI * 2);
  ctx.stroke();

  // Drawing the right eye: the centre is point F (250, 150), and the radius can be calculated by subtracting the x-coordinate of point G (265) from the x-coordinate of point F (250)
  ctx.beginPath();
  ctx.arc(250, 150, 15, 0, Math.PI * 2);
  ctx.stroke();


  // Note that it is more efficient to draw all the arcs as a single path. To do that, we must call the moveTo method between each arc call and pass the coordinates of the point from which the arc will be drawn:

  /*
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.moveTo(300, 200);
    ctx.arc(200, 200, 100, 0, Math.PI);
    ctx.moveTo(165, 150);
    ctx.arc(150, 150, 15, 0, Math.PI * 2);
    ctx.moveTo(265, 150);
    ctx.arc(250, 150, 15, 0, Math.PI * 2);
    ctx.stroke();
  */
