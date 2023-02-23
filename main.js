let randomNum = 0;
let chances = 5;
let gameover = false;

let goBtn = document.getElementById("go");
let resetBtn = document.getElementById("reset");
let userInput = document.getElementById("userInput");
let resultEl = document.getElementById("result");
let chanceEl = document.getElementById("chance");
let history = [];

goBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultEl.textContent = "범위밖";
    return;
  }
  if (history.includes(userValue)) {
    resultEl.textContent = "있음";
    return;
  }
  chances--;
  chanceEl.textContent = `남은 기회 ${chances}`;
  console.log("남은 횟수 : ", chances);

  if (userValue < randomNum) {
    resultEl.textContent = "up";
  } else if (userValue > randomNum) {
    resultEl.textContent = "down";
  } else {
    resultEl.textContent = "맞음";
    goBtn.disabled = true;
  }

  history.push(userValue);
  console.log(history);
  if (chances < 1) {
    gameover = true;
  }

  if (gameover === true) {
    goBtn.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickNum();
  resultEl.textContent = "결과 여기";
}

pickNum();
