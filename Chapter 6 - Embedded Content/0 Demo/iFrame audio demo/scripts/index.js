// Variables
let musicPlayer = document.getElementById("music-player");
let startButton = document.getElementById("start-button");
let frame = document.getElementById("website-frame");

// Function used to "start" the website
function start() {
  musicPlayer.play();
  startButton.classList.add("hidden");
  frame.classList.remove("hidden");
}

// Make the start function listen to the "click" event of the start button
// i.e. make the start function run when the button is clicked
startButton.addEventListener("click",start);

// Function used to respond to any messages the window recieves
function receiveMessage(event) {
  if ( event.data == "sans-music" ) {
    musicPlayer.src = "media/megalovania.mp3";
    musicPlayer.play();
  }
}

// Make the receiveMessage function listen to the "message" event of the window
window.addEventListener("message", receiveMessage);
