// VARIABLES //
let cookiePoints = 0; // The number of "cookie points" the player has
let cookieElement = document.getElementById("big-cookie"); // The cookie element (div#big-cookie) the player should click on
let cookiePointsElement = document.[...]; // The cookie points element used to show the player how many cookie points they have

// ADD POINT FUNCTION //
// This function will:
// - Add 1 cookie point to the total
// - Update the cookie points paragraph with the new total
function addCookiePoint() {
  [...] // Add one cookie point
  cookiePointsElement.textContent = [...]; // Sets the text content of the cookie points element to the number of cookie points
}

// BIG COOKIE CLICK EVENT LISTENER //
// In order to have a function run when the cookie is clicked, we need to make the function an "event listener" of the cookie's "click" event
// We can do this using the cookieElement.addEventListener() method
cookieElement.addEventListener([...]);
