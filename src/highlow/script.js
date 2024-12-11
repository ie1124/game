let currentCard = 0,
  nextCard = 0,
  rouletteInterval,
  isRouletteRunning = false;
let userChoice = "";

function drawCard(isLeftCard) {
  return isLeftCard
    ? Math.floor(Math.random() * 11) + 2
    : Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  currentCard = nextCard = 0;
  document.getElementById("result").textContent = "High&Low？";
  updateDisplay(false);
  stopRoulette();
  nextCard = drawCard(false);
  document.getElementById("judgeBtn").disabled = true;
  resetButtons();
}

function resetButtons() {
  const highBtn = document.getElementById("highBtn");
  const lowBtn = document.getElementById("lowBtn");
  highBtn.classList.remove("active", "inactive");
  lowBtn.classList.remove("active", "inactive");
}

function startRoulette() {
  if (!isRouletteRunning) {
    isRouletteRunning = true;
    document.getElementById("shuffleBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    rouletteInterval = setInterval(() => {
      currentCard = drawCard(true);
      updateDisplay(false);
    }, 100);
  }
}

function stopRoulette() {
  if (isRouletteRunning) {
    clearInterval(rouletteInterval);
    isRouletteRunning = false;
  }
  document.getElementById("shuffleBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}

function guess(choice) {
  const highBtn = document.getElementById("highBtn");
  const lowBtn = document.getElementById("lowBtn");

  if (choice === "high") {
    highBtn.classList.add("active");
    lowBtn.classList.add("inactive");
  } else {
    lowBtn.classList.add("active");
    highBtn.classList.add("inactive");
  }

  userChoice = choice;
  document.getElementById("judgeBtn").disabled = false;
}

function judgeCard() {
  const resultMessage =
    (userChoice === "high" && nextCard > currentCard) ||
    (userChoice === "low" && nextCard < currentCard)
      ? "You Win!"
      : nextCard === currentCard
      ? "Draw!"
      : "You Lose...";

  document.getElementById("result").textContent = resultMessage;
  updateDisplay(true);
}

function updateDisplay(isGameOver) {
  document.getElementById("currentCard").textContent = currentCard || "?";
  document.getElementById("nextCard").textContent = isGameOver ? nextCard : "?";
}

window.onload = startGame;
