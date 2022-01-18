# Reading List
* [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
* [JavaScript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)
* [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

# Additional Resources
* [Understanding the DOM — Document Object Model](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model)
* [The Modern JavaScript Tutorial](https://javascript.info/)

# Exercises

## 1. MDN Assessments
* Complete the following two assessments on MDN (you can find the starter code in the exercise's folder):
 * [Silly story generator](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
 * [Image gallery](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery)

## 2. Cookie Clicker
Complete the starter code from the workbook. Code is missing from `index.html` and `cookie.js`. All missing bits have been replaced with a `[...]`.

**Extension:** Make it so that for every time the user clicks on the cookie, they are given a cookie point every second. e.g. if the user clicks 5 times, they should get 5 cookie points every second. You should use the `setInterval` function.

## 3. Unit Converter
* Easy version: use a single text input and a ‘Convert’ button and display the converted unit in a paragraph below the input elements.
* Advanced version: use two text inputs and whenever the user edits one automatically update the other (hint: look up the [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event). 

## 4. Rock Paper Scissors
* Create a player vs. computer version of the game.
* Add a short delay before showing the computer’s choice to create suspense.
* Support multiple rounds and keep track of the score.

## 5. Basic Calculator
* Create a calculator that can perform basic arithmetic operations.
* To simplify the layout, every button should have the same width and height.

## 6. To Do List
* Create an interactive to do list web application.
* The user should be able to add, delete, and strike through items.
* New items should be added at the end of the list.

## 7. Toggle Puzzle
Create a puzzle game that works the following way:
1. There is a 3x3 grid of squares
2. Each square can be either on or off
3. When a user clicks a square, it will toggle if it is on or off. However, all of the squares it is touching will also toggle. (e.g. clicking on the top left square will cause the top left square, the top middle square, and the left middle square all to toggle)
4. When the game starts some squares are on and some are off. The player should aim to have all the squares be on.

You should use CSS styles to style the squares into a grid, and to make "on" squares look different to "off" squares. You should use JavaScript to make the game playable. You do not need to detect when the player has won the game.

**Extension:** Make the squares change colour when the player hovers their mouse over them. The player should still be able to tell if the square is on or off when the mouse is hovering over the square.

## 8. Tic Tac Toe
* Create a player vs. player version of the game.
* Announce the winner at the end.