let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let cclock = document.getElementById("clock")
let isAlive = false;
let hasBackjack = false;
let player = {
    name: "per",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomcard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1)
    return 11;
  else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomcard();
  let secondCard = getRandomcard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBackjack === false) {
        let card = getRandomcard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// راندوم من اراي يجب عنصر منو
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

function getHand() {
    let ali = Math.floor(Math.random()*3)
    return largeCountries[ali]
}
console.log(getHand())