

// classes
const guessField = document.getElementById("guessField");
const prevGuesses = document.querySelector(".prevGuesses");
const guessAns = document.querySelector(".guessAns");
const guessIndicator = document.querySelector(".guessIndicator");
const guessHighLow = document.querySelector(".guessHighLow");
let resetBtn;

// initial global value for numCount
// helps condition for guesses w/c is = 10 tries
// needs to increment value so I put number 1
let numCount = 1;

let randomNum = Math.floor((Math.random() + 0.01) * 20);

console.log(randomNum);
console.log("numCount:" + numCount);


// event.preventDefault keeps prevGuesses from refreshing
function submitGuess(event) {
	event.preventDefault();

// declared guessField.value as 'Number' so that blank input is = 0
// .value gets the guessField input value
	let guessNum = Number(guessField.value);


// if numCount is equal or equal type to 1, it displays previous guesses content
// .textContent updates content of prevGuesses class
	if (numCount === 1) {
		prevGuesses.textContent = "Previous guesses: ";
	} 

	// adds the guessNum and space to .prevGuesses class
    prevGuesses.textContent += guessNum + " ";


// sets .guessIndicator class to game over if numCount is equal to 10
	if (numCount === 10) {
		guessIndicator.textContent = "Game Over!!!";
		guessIndicator.style.cssText = "background-color: red; color: white;";
		newGame();

	} else if (guessNum === randomNum) {
		guessIndicator.textContent = "Congratulations! You got it right!";

		// option A
		// guessIndicator.style.backgroundColor = "green";
		// guessIndicator.style.color = "white";

		// option B 
		guessIndicator.style.cssText = "background-color: green; color: white;";
		newGame();

		// if all conditions above is not true, then run script below
	} else {
		guessIndicator.textContent = "Wrong!";
		guessIndicator.style.cssText = "background-color: red; color: white;";

		if (guessNum > randomNum) {
			guessHighLow.textContent = "Last guess is too high!";
		} else {
			guessHighLow.textContent = "Last guess is too low!";
		}

	} 



// sets input to empty value
	guessField.value = "";

// increments numCount (1,2,3...)
// ++ means plus 1
// to meet numCount === 10
// to execute display of other guessNum
	numCount++;
	console.log("numCount:" + numCount); 


} 
// ====== end of submitGuess function ======= //



function newGame() {
  	document.querySelector(".submitButton").disabled = true;
  	guessField.disabled = true;

  	resetBtn = document.createElement("BUTTON");
  	resetBtnName = document.createTextNode("Start New Game");
  		

  	// append child - icoconnect siya sa start button
  	resetBtn.appendChild(resetBtnName);
  	resetBtn.className = "resetBtn";
  	// classname creates identity too the button para ma-call din for its functions

  	// appear to html body
  	document.body.appendChild(resetBtn);
  	// taga add ng event methods like on click..etc..
  	// attach event handler to an element
  	// on click is the type of the event
  	// resetGame is the function of the event
  	resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
	document.querySelector(".submitButton").disabled = false;
  	guessField.disabled = false;

  	guessIndicator.textContent = "";
  	prevGuesses.textContent = "";

  	document.querySelector(".resetBtn").remove();
  	console.log(resetBtn);
  	
  	randomNum = Math.floor((Math.random() + 0.01) * 20);
	numCount = 1;

  	console.log(randomNum);
  	console.log(numCount);

}
