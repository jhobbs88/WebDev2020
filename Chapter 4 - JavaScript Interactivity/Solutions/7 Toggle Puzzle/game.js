// SQUARES ARRAY //

// Create an array containing all of the "square" divs
const squares = [
  document.getElementById("square0"),
  document.getElementById("square1"),
  document.getElementById("square2"),
  document.getElementById("square3"),
  document.getElementById("square4"),
  document.getElementById("square5"),
  document.getElementById("square6"),
  document.getElementById("square7"),
  document.getElementById("square8"),
];

// Uncomment this line to see the array in the console
// console.log( squares );

// TOGGLE SQUARE FUNCTION //

// The "ToggleSquare" function is used to activate a square if it is not activated, or deactivate if it is activated.
// The "squareDiv" argument is the square we want to toggle. (Unlike in C++, we do not need to specify the argument type)
function ToggleSquare( squareDiv ) {
  let squareIsActive = squareDiv.classList.contains("active"); // Check to see if the div has the "active" class

  if ( squareIsActive ) { // If the div has the "active" class
    squareDiv.classList.remove("active"); // Remove the "active" class from the div
  } else { // Otherwise, if the div does not have the "active class"
    squareDiv.classList.add("active"); // Add the "active" class to the div
  }
}

// ON CLICK EVENT LISTENERS //

// Add to each square a custom event listener (function) that listens to the "click" event
// When a sqaure is clicked by the user, it will now run it's own custom function
/*
The syntax:
  () => {
    ...
  }
Is an alternative way of writing a function. The function will be an "anonymous" function, as it has no name.
We can use this syntax to write the function directly inside the list of arguments for the "addEventListener" method
*/

// Sqaure 0
squares[0].addEventListener("click", () => {
  ToggleSquare(squares[0]);
  ToggleSquare(squares[1]);
  ToggleSquare(squares[3]);
});

// Sqaure 1
squares[1].addEventListener("click", () => {
  ToggleSquare(squares[0]);
  ToggleSquare(squares[1]);
  ToggleSquare(squares[2]);
  ToggleSquare(squares[4]);
});

// Sqaure 2
squares[2].addEventListener("click", () => {
  ToggleSquare(squares[1]);
  ToggleSquare(squares[2]);
  ToggleSquare(squares[5]);
});

// Sqaure 3
squares[3].addEventListener("click", () => {
  ToggleSquare(squares[0]);
  ToggleSquare(squares[3]);
  ToggleSquare(squares[4]);
  ToggleSquare(squares[6]);
});

// Sqaure 4
squares[4].addEventListener("click", () => {
  ToggleSquare(squares[1]);
  ToggleSquare(squares[3]);
  ToggleSquare(squares[4]);
  ToggleSquare(squares[5]);
  ToggleSquare(squares[7]);
});

// Sqaure 5
squares[5].addEventListener("click", () => {
  ToggleSquare(squares[2]);
  ToggleSquare(squares[4]);
  ToggleSquare(squares[5]);
  ToggleSquare(squares[8]);
});

// Sqaure 6
squares[6].addEventListener("click", () => {
  ToggleSquare(squares[3]);
  ToggleSquare(squares[6]);
  ToggleSquare(squares[7]);
});

// Sqaure 7
squares[7].addEventListener("click", () => {
  ToggleSquare(squares[4]);
  ToggleSquare(squares[6]);
  ToggleSquare(squares[7]);
  ToggleSquare(squares[8]);
});

// Sqaure 8
squares[8].addEventListener("click", () => {
  ToggleSquare(squares[5]);
  ToggleSquare(squares[7]);
  ToggleSquare(squares[8]);
});

// CREATE PUZZLE //
// Activate specic sqaures to create a puzzle for the player to solve
// By default all of the squares are off, so we will active them by toggling them
ToggleSquare(squares[0])
ToggleSquare(squares[1])
ToggleSquare(squares[5])
ToggleSquare(squares[6])
ToggleSquare(squares[7])
ToggleSquare(squares[8])
