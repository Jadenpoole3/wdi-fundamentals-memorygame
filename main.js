main.js
console.log("Up and running!");
 <script src="js/main.js"></script>
alert('Hello, friends.');
var cards = {"queen", "queen", "king", "king"};

var checkForMatch = function {
	this.(cardId[cardId].cardImage)
if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
}
var flipCard = function (cardId) {
	this.getAttribute(data-id);
console.log("User flipped" + cards{cardId});
      cardsInPlay.push(cards{cardId});
      cards[cardId].rank
      queen.push(cards[cardId].rank);
      king.push(cards[cardId].rank);
      console.log(cardImage);
      console.log(suit);

  }
  var createBoard = function {
   for (var i = 0; i < createBoard.length; i++) {
   var newListItem = document.createElement('img');
   document.cardElement.setAttribute('src', 'images/back.png');
   document.cardElement.setAttribute('data-id', i);
   document.cardElement.addEventListener('click', flipCard);
   document.cardElement(game-board),appendChild(newItem);
 }
  }
createBoard.function.call(createBoard);
delete.function.cardId;
  
  var myArray [
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png",
  },
  {
  	rank: "queen",
  	suit: "diamonds",
  	cardImage: "images/queen-of-diamonds.png",
  },
  {
  	rank: "king",
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png",
  },
  {
  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png",
  }

  ]

};




</body>
</html>



console.log("Up and running!");
 <script src="/Users/jadenpoole/Desktop/Fundamentals/main.js"></script>
alert('Hello, friends.');
console.log("All systems are go!")

var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];
var cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            console.log("That's a match!");
        } else {
            alert('Sorry, try again.');
        }
    }
}

var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    console.log('User flipped ' + cards[cardId].rank);
    console.log('User flipped ' + cards[cardId].cardImage);
    console.log('User flipped ' + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    this.setAttribute('src', cards[cardId].cardImage);
};

var createBoard = function(){
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

createBoard(); '



</body>
</html>
