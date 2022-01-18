// CONSTANTS //
const controls = document.getElementById('control-area');
const xMathText = document.getElementById('x-math');
const yMathText = document.getElementById('y-math');
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

// CLASSES //
class Parameter {
  constructor(label, value, min, max, step) {
    // Set values
    this.value = value
    this.label = label
    this.step = step || 1
    this.min = min
    this.max = max

    // Create elements
    this.labelTag = document.createElement('label');
    this.labelTag.for = 'parameter-' + label;
    this.labelTag.textContent = label;

    this.inputTag = document.createElement('input');
    this.inputTag.id = 'parameter-' + label;
    this.inputTag.type = 'range';
    this.inputTag.min = min;
    this.inputTag.max = max;
    this.inputTag.step = this.step;

    this.spanTag = document.createElement('span')

    controls.appendChild(this.labelTag);
    controls.appendChild(this.inputTag);
    controls.appendChild(this.spanTag);
    controls.appendChild(document.createElement('br'));
    this.updateHTML();

    // Create event listeners
    this.inputTag.addEventListener('input', (evt)=>{
      this.value = Number(this.inputTag.value);
      this.updateHTML();
    })
  }

  modify(amt) {
    this.value += amt;
    while ( this.value > this.max ) {
      this.value -= this.max-this.min
    }
    this.value = Math.round(this.value/this.step) * this.step
    this.updateHTML();
  }

  updateHTML() {
    this.inputTag.value = this.value;
    this.spanTag.textContent = (this.value>=0?" ":"") + (this.step==1?this.value:this.value.toFixed(2));
  }
}


// SET UP //
let a = new Parameter('a', 0, 0, 200);
let b = new Parameter('b', 100, 0, 200);
let t = new Parameter('t', 0, -3.14, 3.14, 0.01);

const checkboxLabel = document.createElement('label')
checkboxLabel.for = 'run-animation';
checkboxLabel.textContent = "Animate";

const checkbox = document.createElement('input');
checkbox.id = 'run-animation';
checkbox.type = 'checkbox';

controls.appendChild(checkboxLabel);
controls.appendChild(checkbox);

let mx, my
let ex, ey

let frame = 0;

// MAIN //
function main() {
  requestAnimationFrame(main);

  ctx.fillStyle = '#444'
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();

  frame++;
  if ( checkbox.checked && frame == 2 ) t.modify(0.02);
  if ( frame == 2 ) frame = 0;

  // Middle point
  mx = canvas.width/2;
  my = canvas.height/2

  // Point on ellipse
  ex = a.value*Math.sin(t.value);
  ey = b.value*Math.cos(t.value);

  // Draw grid
  ctx.lineWidth = .5;
  ctx.strokeStyle = '#222';
  for ( var x = 0; x < canvas.width; x+=50 ) {
    for ( var y = 0; y < canvas.height; y+=50 ) {
      ctx.beginPath();
      ctx.rect(x, y, 50, 50);
      ctx.stroke();
    }
  }

  ctx.strokeStyle = 'black';
  for ( var x = 0; x < canvas.width; x+=mx ) {
    for ( var y = 0; y < canvas.height; y+=my ) {
      ctx.beginPath();
      ctx.rect(x, y, mx, my);
      ctx.stroke();
    }
  }

  // Draw trig graphs
  ctx.lineWidth = 2;

  // Draw sine
  ctx.strokeStyle = 'cornflowerblue';
  ctx.beginPath();
  ctx.moveTo( mx + ex , 100 )
  ctx.lineTo( mx + ex , mx + ey )
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  for ( var y = 0; y < 100; y++) {
    ctx.moveTo( my + a.value*Math.sin(t.value-y/8) , 100-y )
    ctx.lineTo( my + a.value*Math.sin(t.value-(y+1)/8) , 99-y )
  }
  ctx.closePath();
  ctx.stroke();

  // Draw cos
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo( 100 , mx + ey )
  ctx.lineTo( mx + ex , mx + ey )
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  for ( var x = 0; x < 100; x++) {
    ctx.moveTo( 100-x , my + b.value*Math.cos(t.value-x/8) )
    ctx.lineTo( 99-x , my + b.value*Math.cos(t.value-(x+1)/8) )
  }
  ctx.closePath();
  ctx.stroke();

  // Draw path
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(mx, my, a.value, b.value, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Draw position dot
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(mx + ex, my + ey, 8, 0, Math.PI * 2);
  ctx.fill();

  // Update math
  let tDisplay = (t.value>=0?" ":"") + t.value.toFixed(2)
  let exDisplay = (ex>=0?" ":"") + ex.toFixed(2)
  let eyDisplay = (ey>=0?" ":"") + ey.toFixed(2)

  xMathText.textContent = `x = a*Math.sin(t)
x = ${a.value}*Math.sin(${tDisplay})
x = ${exDisplay}`
yMathText.textContent = `y = b*Math.cos(t)
y = ${b.value}*Math.cos(${tDisplay})
y = ${eyDisplay}`
}

main()
