// client-side js
// run by the browser each time your view template is loaded

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	// mode buttons event listeners
	setupMode();
	setupSquares();
	reset();			
}
function setupMode(){
	// mode buttons event listeners
	for(var i = 0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares =3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		// Add click listeners to sqaures
		squares[i].addEventListener("click",function(){
			// get color of clicked sqaure
			var clickedColor = this.style.backgroundColor;
			// compared color to picked color
			if(clickedColor === pickedColor){
				message.textContent = "correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				message.textContent = "wrong";
			};
		});
	}
}

function reset(){
		// generate all new colors
		colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	// change colors of sqaures
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//reset h1 background color
	h1.style.backgroundColor = 'steelblue';
}


resetButton.addEventListener("click", function(){
	reset();
});
function changeColors(color){
	//loop through all squares
	for(var i = 0;i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get Random Color and push into arr
		arr.push(randomColor());
	}
	// return arr
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", "  + b + ")";
}