// a game where 2 players show their cards during each round
// winner of each round is the person who has the higher # card
// want to make 52 cards, var suits, and various value/faces
let suits = ['Heart', 'Spade', 'Club', 'Diamond']

let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']


class Card {
    constructor(suit, value, face) {
        this.suit = suit;
        this.value = value;
        this.face = face;
    }
}


class Game {
    constructor(cards) {
        this.deck = [];
        this.makeDeck();
        this.round = 0;
        this.player1 = new Player(1);
        this.player2 = new Player(2);
        this.dealCards();
        // this.cards = cards

        // start the game
    }

    makeDeck() {
        for(let x = 0; x < values.length; x++) {
            for (let suit of suits) {
                // console.log(`${suit} of ${values[x]}`);
                let card = new Card(suit,x + 1,values[x]);
                this.deck.push(card);
            }
        }

        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    dealCards() {
        this.player1.hand = this.deck.splice(0,26);
        this.player2.hand = this.deck.splice(0,26);
    }

    runGame() {
        let player1Points = 0
        let player2Points = 0
        //each round
        for (let i = 0; i < 26; i++) {
             //  console.log(this.player1.hand[i].value)
             let currentRound = this.round + i + 1;
             if (this.player1.hand[i].value > this.player2.hand[i].value) {
                console.log(`Round ${currentRound}: Player 1 wins the round!`);
                // console.log("Player 1 wins the round!");
                player1Points += 1;
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                console.log(`Round ${currentRound}: Player 2 wins the round!`);
                // console.log("Player 2 wins the round!");
                player2Points += 1;             
            } else if (this.player1.hand[i].value === this.player2.hand[i].value) {
                console.log(`Round ${currentRound}: Players tied`);
                // console.log("Players tied");               
                    }
        }

        if (player1Points > player2Points) {
            console.log("Player 1 won the game with " + player1Points  + " points!");
        } else if (player2Points > player1Points) {
            console.log("Player 2 won the game with " + player2Points + "points!");
        } else {
            console.log("Players tied!");
        }
        //write code to declare final winner
    }
}


class Player {
    constructor(num) {
        this.name = `Player ${num}`;
        this.hand = [];

    }
}

let war = new Game();


war.runGame()





// if (this.player1.hand[i].value > this.player2.hand[i].value) {
//     console.log(`Round ${currentRound}: Player 1 wins the round!`);
//     // console.log("Player 1 wins the round!");
//     player1Points += 1;
// } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
//     console.log(`Round ${currentRound}: Player 2 wins the round!`);
//     // console.log("Player 2 wins the round!");
//     player2Points += 1;             
// } else {
//     console.log(`Round ${currentRound}: Players tied`);
//     // console.log("Players tied");               
//         }

// if (this.player1.hand[i].value == this.player2.hand[i].value) {
//     console.log(`Round ${currentRound}: Players tied`);
// } else if (this.player1.hand[i].value > this.player2.hand[i].value) {
//     console.log(`Round ${currentRound}: Player 1 wins the round!`);
//     player1Points += 1;
// } else if (this.player2.hand[i].value > this.player1.hand[i].value) { 
//     console.log(`Round ${currentRound}: Player 2 wins the round!`);
//     player2Points += 1;
// }













// each player flips a card 
 
// whoever has the highest card takes both cards adds them to bottom of the stack

// loser card will get spliced into winners deck

//  if (this.player1.hand[1] > this.player2.hand[1]) {
//      player2.push(hand[0]);
//  } else if (this.player2.hand[1] > this.player1.hand[1]) {
//      player1.push(hand[1]);
//  } else {
    // need to flip a new card
// }








// whoever has the all teh cards at the end wins



