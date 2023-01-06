var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Idle Randomness'); // Create a title element
var button = new Button('Quack', btnPress);   // Create a button element
var hidden = new Button('Quack 2');
//hidden.hide();
var scr = new Text(score);                    // Create a text element
//changes
setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}
