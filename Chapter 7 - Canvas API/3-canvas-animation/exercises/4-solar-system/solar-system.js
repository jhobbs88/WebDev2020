const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// A celestial body is (basically) anything out in space
// We create the sun object, earth object, and moon object using this class
class CelestialBody {
  constructor(radius, color) {
    // ADD CODE HERE
  }

  // This function is used to indicate that the object should orbit the "orbitsBody" object
  setOrbit(orbitsBody, distance, speed) {
    // ADD CODE HERE
  }

  // This function is used to update the position of the object
  // We only do this if "orbitsBody" has been set, because the Sun does not orbit another object
  update() {
    if ( this.orbitsBody ) {
      // ADD CODE HERE
      // Here you should set the x and y of the object according to it's orbit
      // The functions Math.sin() and Math.cos() might help you
    }
  }

  // This function is used to draw the object
  draw() {
    // ADD CODE HERE
  }
}

// Construct sun
const sun = new CelestialBody(100, 'yellow');
sun.x = 1024/2;
sun.y = 768/2;

// Construct Earth
const earth = new CelestialBody(30, 'green');
moon.setOrbit(earth, 50, -0.08);

// Construct moon
const moon = new CelestialBody(10, 'gray');
earth.setOrbit(sun, 350, 0.011);

// Main function //
function main() {
  requestAnimationFrame(main);

  // ADD CODE HERE

  // Instead of clearing the canvas the normal way, draw a black rectange over the entire canvas to create a black background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1024, 768);

  // ADD CODE HERE

}

main();
