const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw new buildings behind existing buildings
ctx.globalCompositeOperation = 'destination-over';

/*
  An array in which all the buildings are stored.
  Each building is an object consisting of the following properties:
    x: the x-coordinate of the top-left corner of the building
    y: the y-coordinate of the top-left corner of the building
    w: the width of the building
    h: the height of the building
    z: how far away is the building (0 = front, 1 = behind one building, 2 = behind two buildings, etc.)
    path: a Path2D object to check if the user clicked on the building and then erase it
    windows: a 2-dimensional array of the building's windows. Each array element stores whether an individual window is lit or not.
*/
const buildings = [];


// This function iterates through the buildings array and draws the skyline
function drawSkyline() {
  ctx.clearRect(0, 0, 1024, 768);

  for (let i = 0; i < buildings.length; i++) {
    
    // NOTE
    // We draw the windows before the actual building because global composite operation is set to 'destination-over'
    
    // Windows are less opaque if building is behind other buildings
    const windowsOpacity = (10 - buildings[i].z * 1.5) / 10;
    ctx.fillStyle = 'rgba(255, 213, 0, ' + windowsOpacity + ')';

    for (let j = 0; j < buildings[i].windows.length; j++) {
      const vertWindowsNum = buildings[i].windows[j].length;

      for (let k = 0; k < buildings[i].windows[j].length; k++) {
        if (buildings[i].windows[j][k]) {
          ctx.fillRect(
            buildings[i].x + 10 + j * 20,
            buildings[i].y + 10 + k * 20,
            10,
            10
          );
        }
      }
    }

    // Colour is lighter if building is behind other buildings
    const buildingLightness = buildings[i].z * 10;
    ctx.fillStyle = 'hsl(0, 0%, ' + buildingLightness + '%)';

    ctx.fill(buildings[i].path);
  }        
}

// This function is called on click events checking whether to add/remove a building
function changeSkyline(event) {

  // Set the width, height, and the x- and y- coordinates of the top-left corner of the building to be added, based on the point on which the user has clicked. Note that the width of the building can only be 50, 70, 90 .. up to 150 so that windows are unifrom (each window is 10x10).
  let w = Math.floor(Math.random() * 6) * 20 + 50;
  let h = 768 - event.offsetY;
  let x = event.offsetX - w / 2;
  let y = event.offsetY;
  let z = 0;

  for (let i = 0; i < buildings.length; i++) {
    /* we first check if the point on which the user has clicked is inside an existing building. if it is, we remove that building from the array using the splice method. we also set addBuilding to false so no building is added. */
    
    // Check if the user clicked on an existing building
    if (ctx.isPointInPath(buildings[i].path, event.offsetX, event.offsetY)) {
      
      // Remove building from array
      buildings.splice(i, 1);
      return; // Exit function, no building should be added
      
    } else if (
      // Has the user clicked on an existing building? 
      (x <= buildings[i].x && x + w >= buildings[i].x)
      || (x >= buildings[i].x && x <= buildings[i].x + buildings[i].w)
    ) {
      
      // A building cannot be added behind more than five buildings. So if the user has clicked on a point above an existing building that is behind five other buildings, an alert will be displayed saying that it is impossible to add a building there. We do try to make the building narrower and check maybe now it won't be behind other buildings, but if its width is 50 (the narrowest building the user can add) an alert will indeed be displayed and no building will be added.
      
      if (buildings[i].z == 5) {
        if (w == 50) {
          alert('This is as far as you can go. Try removing a building or adding a building to another part of the city.');
          addBuilding = false; // Don't add building
          return; // Exit function, no building should be added
        } else {
          w -= 20;
          x = event.offsetX - w / 2;
          z = 0;
          i = -1; // Negate for loop increment so the same existing building is checked again after updating the new building's width and height
        }
      } else {
        z = buildings[i].z + 1;
      }
    }
  }

  // Path for the new building
  const path = new Path2D();
  path.rect(x, y, w, h);

  // Windows for the new building
  const windows = [];

  // Calculate how many windows there can be in the building
  const rows = (w - 10) / 20;
  const cols = Math.floor((h - 50) / 20);

  for (let i = 0; i < rows; i++) {
    windows.push([]);

    for (let j = 0; j < cols; j++) {
      let litWindow = false;
      /* the chances that a window will be lit */
      if (Math.random() > 0.6) {
        litWindow = true;
      }

      windows[i].push(litWindow);
    }
  }

  // Add new building to array
  buildings.push({ x, y, w, h, z, path, windows });

}

canvas.addEventListener('click', changeSkyline);
canvas.addEventListener('click', drawSkyline);