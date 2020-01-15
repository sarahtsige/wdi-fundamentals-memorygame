
const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "image/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "image/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "image/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "image/king-of-diamonds.png"
}
];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		//Logic here  
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}




const cardsInPlay = [];



function checkForMatch() {
	this.setAttribute("src", cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		alert ("Sorry, try again.");
	}
}
}

function flipCard() {
	cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();	
}
createBoard();