let firstmark;
let secondmark;
let gamestatus;

let board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let count ;
let step = 1;

//ne imati select ijdida nego napravit container i sve to napravit u lupu a ne zasebno

let tableCont = document.getElementById("tablecont")
let gameStatusPlace = document.getElementById('gamestatus')
let table = document.createElement('table')

let playagain = document.getElementById('playAgain')
let buttons = document.getElementsByClassName('cellButton')

let firstSymbol = document.querySelector('.firstSymbolContainer')
let symbolX = document.getElementById('firstSymbol-X')
let symbolO = document.getElementById('firstSymbol-O')

//Functions to handle game.

window.addEventListener('load', () => { drawBoard(); } )

playagain.addEventListener('click', () => { reset(); })

firstSymbol.addEventListener('click', (e) => {

	e.target.disabled = true;

	if(e.target.value == "X"){
		
		firstmark = e.target.value;
		secondmark = "O"
		symbolO.disabled = true;
		symbolO.style.color = "black";

	} else if (e.target.value == "O") {
		
		symbolX.disabled = true;
		firstmark = e.target.value;
		secondmark = "X"
		symbolO.style.color = "black";
	}
})

//Function to check user input. Inside DOM table searching for button to click.
//Adding symbol behaviour.

table.addEventListener('click', (event) => {

  const isButton = event.target.nodeName === 'BUTTON';
  
  if (!isButton) {
    return;
  }

  if(firstmark == undefined && secondmark == undefined) {

    symbolX.style.backgroundColor = "#EC5151"
    symbolO.style.backgroundColor = "#EC5151"

    setTimeout(() => {
    symbolX.style.backgroundColor = "white"
    symbolO.style.backgroundColor = "white"
    },1000)

  	return;
  }

  for(let i = 0 ; i < board.length ; i++){
  	for(let k = 0 ; k < board[i].length ; k++){
  		if(event.target.value == board[i][k]) {	
  			step++
  			if(step % 2 === 0) {
 		 	event.target.innerHTML = firstmark;
  			board[i][k] = firstmark;
  			} else {
  			event.target.innerHTML = secondmark;
  			board[i][k] = secondmark;	
  			}
  		}
}}

  event.target.disabled = true;
  checkWin(event)
})


//Function to check win.

function checkWin (e) {	
	  count ++

	if(board[0][0] == e.target.innerHTML && board[0][1] == e.target.innerHTML && board[0][2] == e.target.innerHTML ) {
		gamestatus = "WIN"
	} else if (board[0][0] == e.target.innerHTML && board[1][0] == e.target.innerHTML && board[2][0] == e.target.innerHTML){
		gamestatus = "WIN"
	} else if (board[1][0] == e.target.innerHTML && board[1][1] == e.target.innerHTML && board[1][2] == e.target.innerHTML){
		gamestatus = "WIN"
	} else if (board[2][0] == e.target.innerHTML && board[2][1] == e.target.innerHTML && board[2][2] == e.target.innerHTML){
		gamestatus = "WIN"
	} else if (board[0][1] == e.target.innerHTML && board[1][1] == e.target.innerHTML && board[2][1] == e.target.innerHTML){
		gamestatus = "WIN"
	} else if (board[0][2] == e.target.innerHTML && board[1][2] == e.target.innerHTML && board[2][2] == e.target.innerHTML){
		gamestatus = "WIN"
	} else if (board[0][0] == e.target.innerHTML && board[1][1] == e.target.innerHTML && board[2][2] == e.target.innerHTML){
		gamestatus = "WIN"
	} else if (board[0][2] == e.target.innerHTML && board[1][1] == e.target.innerHTML && board[2][0] == e.target.innerHTML){
		gamestatus = "WIN"
	}

	if (gamestatus == "WIN") {
		gameStatusPlace.innerHTML = `${e.target.innerHTML} WON !`
		gameStatusPlace.style.color = "#2f9e44"
		//skuziti kako disable bez funkcije ovdje.
		disableButtons();
	} else if (count == 9) {

		gameStatusPlace.innerHTML = "Board filled. Game Over !"
		gameStatusPlace.style.color = "#F03E3E"
		disableButtons();
	}
}

//Function to draw the board on start. Creating Table with DOM appending buttons inside it to click in game.

function drawBoard () {

	playagain.disabled = true;
	
	tablecont.appendChild(table)
for(let i = 0 ; i < board.length ; i++){
	let row = document.createElement('tr')
	table.appendChild(row)
	for(let k = 0 ; k < board[i].length ; k++){
		let cell = document.createElement('td')
		let button = document.createElement('button')
		button.innerHTML = "";
		button.value = board[i][k];
		button.style.height = "75px"
		button.className = "cellButton"
		cell.className = "eachCell"
		button.style.width = "75px"
		button.style.backgroundColor ="#343a40"
		button.style.color="white"
		button.style.margin = "20px 40px 20px 20px"
		button.style.fontSize = "20px"
		cell.style.borderBottom = "thick solid white"
		row.appendChild(cell)
		cell.appendChild(button)
	}
}}


// Function to disable the buttons after game.

function disableButtons () {

	for(let i = 0 ; i < buttons.length ; i++){
		buttons[i].disabled = true;
	}

	symbolX.disabled = true;
	symbolO.disabled = true;
	playagain.disabled = false;

}

//Function to reset board and enable buttons.

function reset () {

 	gamestatus = "";
 	gameStatusPlace.innerHTML = gamestatus;

	count = 0;
	step = 1;

	firstmark = undefined;
	secondmark= undefined;

	symbolX.disabled = false;
	symbolO.disabled = false;
	
	for(let i = 0 ; i < buttons.length ; i++) {
		buttons[i].innerHTML = "";
		buttons[i].value = i + 1;
		buttons[i].disabled = false;
	}

	for(let i = 0 ; i < board.length ; i++) {
		for(let k = 0 ; k < board[i].length ; k++) { 
			count++
			board[i][k] = count;
		}}
}


