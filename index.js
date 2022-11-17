let count = 0;
let gamestatus = "";

let board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


let tableCont = document.getElementById("tablecont")
let gameStatusPlace = document.getElementById('gamestatus')

let table = document.createElement('table')
let bats = document.getElementsByClassName('nes')

// istajlat gejmboard i gejm enviroment.
// naprednije napraviti dva buttona koji ce biti mogucnost odabira prilikom klika na polje i dati mogucnost X-a ili O-a i opet checkirat win.


window.addEventListener('load', () => { drawBoard(); } )

table.addEventListener('click', (event) => {
  
const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  let input = prompt("symbol")

  for(let i = 0 ; i < board.length ; i++){
  	for(let k = 0 ; k < board[i].length ; k++){
  		if(board[i][k] == event.target.value){
  			event.target.innerHTML = input;
  			event.target.value = input;
  			board[i][k] = input;
  		} 
  	}

  }

  event.target.disabled = true;

  checkWin(event)
  checkstatus(event);

})

function checkWin (e) {

	count++

	if(board[0][0] == e.target.value && board[0][1] == e.target.value && board[0][2] == e.target.value ) {
		gamestatus = "WIN"
	} else if (board[0][0] == e.target.value && board[1][0] == e.target.value && board[2][0] == e.target.value){
		gamestatus = "WIN"
	} else if (board[1][0] == e.target.value && board[1][1] == e.target.value && board[1][2] == e.target.value){
		gamestatus = "WIN"
	} else if (board[2][0] == e.target.value && board[2][1] == e.target.value && board[2][2] == e.target.value){
		gamestatus = "WIN"
	} else if (board[0][1] == e.target.value && board[1][1] == e.target.value && board[2][1] == e.target.value){
		gamestatus = "WIN"
	} else if (board[0][2] == e.target.value && board[1][2] == e.target.value && board[2][2] == e.target.value){
		gamestatus = "WIN"
	} else if (board[0][0] == e.target.value && board[1][1] == e.target.value && board[2][2] == e.target.value){
		gamestatus = "WIN"
	} else if (board[0][2] == e.target.value && board[1][1] == e.target.value && board[2][0] == e.target.value){
		gamestatus = "WIN"
	}
}

function drawBoard () {

	tablecont.appendChild(table)
for(let i = 0 ; i < board.length ; i++){
	let row = document.createElement('tr')
	table.appendChild(row)
	for(let k = 0 ; k < board[i].length ; k++){
		let button = document.createElement('button')
		button.innerHTML = board[i][k];
		button.value = board[i][k];
		button.style.height = "50px"
		button.className = "nes"
		button.style.width = "50px"
		button.style.margin = "20px 20px 20px 20px"
		row.appendChild(button)
	}

}

}

function checkstatus (event) {

	if(gamestatus == "WIN"){
		gameStatusPlace.innerHTML = `${event.target.value} WON !`
		gameStatusPlace.style.color = "green"
		reset();
	} else if(count == 9){
		gameStatusPlace.innerHTML = `Board filled. Game Over !`
		gameStatusPlace.style.color = "red"
		reset();
	}
}




function reset () {

	setTimeout(() => {
 	gameStatusPlace.innerHTML = ""},3000)

	gamestatus = "";
	count = 0;

	for(let i = 0 ; i < bats.length ; i++){
		bats[i].innerHTML = i+1;
		bats[i].value = i+1;

		bats[i].disabled = false;
	}


	let index = 0 ;
	for(let i = 0 ; i < board.length ; i++){
		for(let k = 0 ; k < board[i].length ; k++){
			index++
			board[i][k] = index;
		}
	}

}
