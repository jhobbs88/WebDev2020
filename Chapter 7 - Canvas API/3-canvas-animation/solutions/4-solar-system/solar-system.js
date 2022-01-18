const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// A celestial body is (basically) anything out in space
// We create the sun object, earth object, and moon object using this class
class CelestialBody {
  constructor(radius, color) {
    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.color = color;
  }

  // This function is used to indicate that the object should orbit the "orbitsBody" object
  setOrbit(orbitsBody, distance, speed) {
    this.orbitsBody = orbitsBody;
    this.orbitDistance = distance;
    this.orbitSpeed = speed;
    this.orbitProgress = 0; // This variable is used to track how far through it's orbit the object is
  }

  // This function is used to update the position of the object
  // We only do this if "orbitsBody" has been set, because the Sun does not orbit another object
  update() {
    if ( this.orbitsBody ) {
      this.orbitProgress += this.orbitSpeed; // Increase the progress the object has made through it's orbit

      // Set the position of the object to the position of the object it orbits PLUS a certian distance in the x and y direction
      this.x = this.orbitsBody.x + this.orbitDistance * Math.sin(this.orbitProgress);
      this.y = this.orbitsBody.y + this.orbitDistance * Math.cos(this.orbitProgress);

      // To understand why using the sine and cosine functions (Math.sin and Math.cos) is used to create a circle, you might want to ask for an in person explaination
      // This GIF may be helpful: https://commons.wikimedia.org/wiki/File:Circle_cos_sin.gif
      // (x, y) = (r*sine(t), r*cosine(t)) : where r is the radius, and t is an angle at the centre of the circle
    }
  }

  // This function is used to draw the object
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Construct sun
const sun = new CelestialBody(100, 'yellow');
sun.x = 1024/2;
sun.y = 768/2;

// Construct Earth
const earth = new CelestialBody(30, 'green');

// Construct moon
const moon = new CelestialBody(10, 'gray');
moon.setOrbit(earth, 50, -0.08);
earth.setOrbit(sun, 350, 0.011);

// Main function //
function main() {
  requestAnimationFrame(main);

  // Update each celestial body
  sun.update();
  earth.update();
  moon.update();

  // Instead of clearing the canvas the normal way, draw a black rectange over the entire canvas to create a black background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1024, 768);

  // Draw each celestial body
  sun.draw();
  earth.draw();
  moon.draw();
}

main();
