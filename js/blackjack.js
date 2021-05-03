let superDeck = getDeck();
let playerHand = [];
let cpuHand = [];

let playerScore = 0;
let cpuScore = 0;

let playerTarget = document.getElementById("playerTarget");
let playerScoreBoard = document.getElementById("playerScoreBoard")
let cpuTarget = document.getElementById("cpuTarget");
let cpuScoreBoard = document.getElementById("cpuScoreBoard");

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
    playerScoreBoard.innerHTML = " ";
    cpuScoreBoard.innerHTML = " ";
    playerTarget.innerHTML = " ";
    cpuTarget.innerHTML = " ";

    getDeck();
});

document.getElementById("draw").addEventListener("click", function () {

    playerHand.push(drawCard());
    showCards(playerHand, playerTarget);
    showScore(playerHand, playerScoreBoard);
    //getScore(playerHand);
    calculateScore(playerHand)
    compareScore();

});/**/

document.getElementById("start").addEventListener("click", function () {

    superDeck = getDeck();

    playerHand = [];
    playerHand.push(drawCard());
    playerHand.push(drawCard());
    showCards(playerHand, playerTarget);
    showScore(playerHand, playerScoreBoard);
    //compareScore()
    //getScore(playerHand)

    cpuHand = [];
    cpuHand.push(drawCard());
    cpuHand.push(drawCard());

    showCards(cpuHand, cpuTarget);
    showScore(cpuHand, cpuScoreBoard);

    if (playerScore > 21) {
        compareScore();
    }
    //compareScore()
    //getScore(cpuHand)

});

document.getElementById("hold").addEventListener("click", function () {
    cpuHand.push(drawCard());

    showCards(cpuHand, cpuTarget);
    showScore(cpuHand, cpuScoreBoard);
    //getScore(cpuHand);
    calculateScore(cpuHand);
    compareScore();
});







