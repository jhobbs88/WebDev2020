const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();

// Building 1
ctx.moveTo(0, 403);
ctx.lineTo(60, 403);
ctx.lineTo(60, 475);
ctx.lineTo(79, 475);

// Building 2
ctx.lineTo(79, 273);
ctx.lineTo(143, 273);
ctx.lineTo(143, 490);
ctx.lineTo(161, 490);

// Building 3
ctx.lineTo(161, 357);
ctx.lineTo(186, 357);
ctx.lineTo(186, 337);
ctx.lineTo(230, 337);
ctx.lineTo(230, 357);
ctx.lineTo(255, 357);      
ctx.lineTo(255, 465);
ctx.lineTo(270, 465);

// Building 4
ctx.lineTo(270, 319);
ctx.lineTo(323, 319);      
ctx.lineTo(323, 387);
ctx.lineTo(338, 387);

// Building 5
ctx.lineTo(338, 223);
ctx.lineTo(390, 223);
ctx.lineTo(390, 398);
ctx.lineTo(405, 398);  

// Building 6
ctx.lineTo(405, 327);
ctx.lineTo(427, 327);
ctx.lineTo(427, 257);
ctx.lineTo(460, 257);
ctx.lineTo(460, 182);
ctx.lineTo(475, 182);
ctx.lineTo(485, 160);
ctx.lineTo(495, 182);
ctx.lineTo(510, 182);
ctx.lineTo(510, 257);
ctx.lineTo(535, 257);
ctx.lineTo(535, 400);
ctx.lineTo(549, 400);

// Building 7
ctx.lineTo(549, 315);
ctx.lineTo(586, 315);
ctx.lineTo(586, 471);
ctx.lineTo(600, 471);

// Building 8
ctx.lineTo(600, 322);
ctx.lineTo(630, 322);
ctx.lineTo(630, 397);
ctx.lineTo(642, 397);

// Building 9
ctx.lineTo(642, 275);
ctx.lineTo(673, 275);      
ctx.lineTo(673, 246);
ctx.lineTo(730, 246);
ctx.lineTo(730, 448);
ctx.lineTo(750, 448);

// Building 10
ctx.lineTo(750, 300);
ctx.lineTo(785, 300); 
ctx.lineTo(785, 340);
ctx.lineTo(800, 340);

ctx.stroke();


// Can you think of an algorithm to draw such a city skyline procedurally?