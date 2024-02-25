const myButton = document.querySelector('button');
const myBox = document.querySelector('.box'); /* This is the box we want to change the color of. */
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];/* This is the array of colors we want to use. */


myButton.addEventListener('click', changeColor);/* This is the event listener that listens for a click on the button. When the button is clicked, the changeColor function is called. */

function changeColor() {
  console.log('hello');

    myBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; /* This is the line that changes the color of the box. */
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; /* Math.random() * colors.length gives a random number between 0 and 1, and Math.floor() rounds it down to the nearest whole number. */
} /* Math. random kenereerib 0-1 iin 0.*/
