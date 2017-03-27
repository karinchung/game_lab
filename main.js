var players = {
	player1: {name: "", health: 25, turn: true},
	player2: {name: "", health: 25, turn: false},
}

var theBody = document.querySelector('body');
var container = document.createElement('div')

var playerBox1 = document.createElement('div')
var playerBox2 = document.createElement('div')

var displayHealth1 = document.createElement('p')
var displayHealth2 = document.createElement('p')

var button1 = document.createElement('button')
var button2 = document.createElement('button')

theBody.append(container)
container.append(playerBox1)
container.append(playerBox2)
playerBox1.append(displayHealth1)
playerBox2.append(displayHealth2)


playerBox1.className = 'player'
displayHealth1.innerText = "Player 1 health is " + players.player1.health
playerBox2.className = 'player'
displayHealth2.innerText = "Player 2 health is " + players.player2.health
button1.innerText = "Roll the die"
button2.innerText = "Roll the die"
button1.id = 1
button2.id = 2
button1.onclick = function takeTurn1() {
	players.player2.health -= (dieRoll());
	if (players.player2.health <= 0 ) {
		playerBox2.innerHTML = "PLAYER 2 LOSES :("
		playerBox1.innerHTML = "PLAYER 1 WINS!"
		// restart option
	}
	else {
	displayHealth2.innerText = "Player 2 health is " + players.player2.health;
	playerBox2.append(button2)
	}


	}
button2.onclick = function takeTurn2() {
	var result = dieRoll()
	players.player1.health -= (result);
	if (players.player1.health <= 0) {
		playerBox1.innerHTML = "PLAYER 1 LOSES :("
		playerBox2.innerHTML = "PLAYER 2 WINS!"
	}
	else {
	displayHealth1.innerText = "Player 1 health is " + players.player1.health;
	playerBox1.append(button1)
	//var userResult = document.createElement('p').innerText = 'console.log("your die roll was " + result)';
	//display die result
	}
}

playerBox1.append(button1)
playerBox2.append(button2)

function dieRoll() {
	return Math.floor(Math.random() * 6) + 1;
}


// Build something that doesn't allow you to click on roll die if you've allready rolled

// Add an improve my odds button that changes math.random (only clicked on once)

// image of a 6 sided die (changes when improve my odds is clicked on for that player)

//Whoever goes first has an advantage. Flip a coin for who goes first or give the second player a better first roll

// Sabotage button, worsten the odds for the other player
