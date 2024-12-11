let isRunning = false;
let intervalId;
let drawnNumbers = [];

window.onload = () => {
  const numberGrid = document.getElementById("numberGrid");
  for (let i = 1; i <= 75; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.id = `number-${i}`;
    numberGrid.appendChild(cell);
  }
};

function toggleRoulette() {
  const controlButton = document.getElementById("controlButton");
  const rouletteNumber = document.getElementById("rouletteNumber");

  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    controlButton.textContent = "スタート";
    markNumber(rouletteNumber.textContent);
  } else {
    isRunning = true;
    controlButton.textContent = "ストップ";
    intervalId = setInterval(() => {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 75) + 1;
      } while (drawnNumbers.includes(randomNumber));
      rouletteNumber.textContent = randomNumber;
    }, 100);
  }
}

function markNumber(number) {
  number = parseInt(number);
  if (!drawnNumbers.includes(number)) {
    drawnNumbers.push(number);
    const cell = document.getElementById(`number-${number}`);
    if (cell) {
      cell.classList.add("marked");
    }
  }
}

function resetRoulette() {
  const rouletteNumber = document.getElementById("rouletteNumber");
  rouletteNumber.textContent = "0";
  drawnNumbers = [];
  const numberGrid = document.getElementById("numberGrid");
  const cells = numberGrid.getElementsByClassName("marked");
  for (let cell of cells) {
    cell.classList.remove("marked");
  }
}
