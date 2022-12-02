let firstmark;
let secondmark;
let gamestatus;

let board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let count = 0;
let step = 1;

//ne imati select ijdida nego napravit container i sve to napravit u lupu a ne zasebno

let tableCont = document.getElementById("tablecont")
let gameStatusPlace = document.getElementById('gamestatus')
let table = document.createElement('table')

let playagain = document.getElementById('playAgain')
let bats = document.getElementsByClassName('cellButton')

let firstSymbol = document.querySelector('.firstSymbolContainer')
let symbolX = document.getElementById('firstSymbol-X')
let symbolO = document.getElementById('firstSymbol-O')




// ne dozvoliti undefiend unos prilikom klika nego ga overwrajtat ili upozoriti user-a da nije izabran.

window.addEventListener('load', () => { drawBoard(); } )

playagain.addEventListener('click', () => { reset(); })

firstSymbol.addEventListener('click', (e) => {

	e.target.disabled = true;

	if(e.target.value == "X"){
		firstmark = e.target.value;
		secondmark = "O"
		symbolO.disabled = true;
	} else if (e.target.value == "O") {
		symbolX.disabled = true;
		firstmark = e.target.value;
		secondmark = "X"
	}

})

table.addEventListener('click', (event) => {

	console.log(playagain)
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  if(firstmark == undefined && secondmark == undefined) {
    symbolX.style.backgroundColor = "#EC5151"
    symbolO.style.backgroundColor = "#EC5151"

    setTimeout(()=>{
    symbolX.style.backgroundColor = "white"
    symbolO.style.backgroundColor = "white"
    },1000)
  	return;
  } else if (!playagain.disabled){
  	playagain.style.backgroundColor = "#EC5151"
  	setTimeout(()=>{
  	playagain.style.backgroundColor = defaultcolor;
    },1000)
  }


  for(let i = 0 ; i < board.length ; i++){
  	for(let k = 0 ; k < board[i].length ; k++){
  		if(event.target.value == board[i][k]) {	
  			step++
  			if(step % 2 === 0){
 		 	event.target.innerHTML = firstmark;
  			board[i][k] = firstmark;
  			} else {
  			event.target.innerHTML = secondmark;
  			board[i][k] = secondmark;	
  			}
  		}
  }
}

  event.target.disabled = true;
  count ++
  checkWin(event)

})

function checkWin (e) {

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

	console.log(count)
	if (gamestatus == "WIN") {
		gameStatusPlace.innerHTML = `${e.target.innerHTML} WON !`
		gameStatusPlace.style.color = "#2f9e44"
		//skuziti kako disable bez funkcije ovdje.
		disableButtons();
	} else if (count == 9) {

		gameStatusPlace.innerHTML = `Board filled. Game Over !`
		gameStatusPlace.style.color = "#F03E3E"
		disableButtons();
	}
}

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
		button.style.margin = "20px 20px 20px 20px"
		button.style.fontSize = "20px"
		cell.style.borderBottom = "thick solid white"
		row.appendChild(cell)
		cell.appendChild(button)
	}


}}

function disableButtons () {

	for(let i = 0 ; i < bats.length ; i++){
		bats[i].disabled = true;
	}

	symbolX.disabled = true;
	symbolO.disabled = true;
	playagain.disabled = false;

}

function reset () {

 	gamestatus = "";
 	gameStatusPlace.innerHTML = gamestatus;

	count = 0;
	step = 1;

	firstmark = undefined;
	secondmark= undefined;

	symbolX.disabled = false;
	symbolO.disabled = false;
	
	for(let i = 0 ; i < bats.length ; i++) {
		bats[i].innerHTML = "";
		bats[i].value = i+1;
		bats[i].disabled = false;
	}

	for(let i = 0 ; i < board.length ; i++){
		for(let k = 0 ; k < board[i].length ; k++){
			count++
			board[i][k] = count;}	
		}
}
