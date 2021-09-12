function getDeck() {
    let suits = ["♠", "♦", "♣", "♥"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // for array deck
    let newDeck = new Array();
    let realValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];


    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = {
                value: values[x],
                suit: suits[i],
                realValue: realValues[x]
            };
            newDeck.push(card);
        }
    }
    return newDeck;
}

function drawCard() {
    let rand = Math.floor(Math.random() * superDeck.length);
    let card = superDeck[rand];
    superDeck.splice(rand, 1);
    return (card);
}

function showCards(hand, target) {
    let returnString = "";
    hand.forEach((element) => {
        let cardText = "<div class='card'>" + element.suit + " " + element.value + "</div>";
        returnString += cardText;
    });
    target.innerHTML = returnString;
}

function showScore(hand, target) {
    let returnString = "";
    let score = 0;
    hand.forEach((element) => {
        score += element.realValue;
    });
    returnString += " score is " + score;
    target.innerHTML = returnString;
}

function calculateScore(hand) {
    let score = 0;
    hand.forEach((element) => {
        score += element.realValue;
    });
    return score;
}

function compareScore() {
    let cpuScore = calculateScore(cpuHand);
    let playerScore = calculateScore(playerHand);

    if (cpuScore == 21 && playerScore === 21) {
        alert("It's a tie! Player: " + playerScore + " - Computer: " + cpuScore)
    } else if (playerScore === 21) {
        alert("Blackjack! Player: " + playerScore + " - Computer: " + cpuScore)
    } else if (cpuScore === 21) {
        alert("Computer won! Player: " + playerScore + " - Computer: " + cpuScore)
    } else if (playerScore > 21) {
        alert("Bust! Player: " + playerScore + " - Computer: " + cpuScore)
    } else if (cpuScore > 21) {
        alert("You win! Player: " + playerScore + " - Computer: " + cpuScore)
    }
}








