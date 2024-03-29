# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Codes

## Project 1

```javascript

console.log("Tinku);

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
    }
  });
});


```

## Project 2

```javascript

const form = document.querySelector("form");
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const message = document.querySelector("#message");

  if (height === "" || height < 0 || isNaN(height)) {
    result.appendChild(
      document.createTextNode(`Please give a valid height: ${height}`)
    );
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.appendChild(
      document.createTextNode(`Please give a valid weight: ${weight}`)
    );
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show result
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      message.appendChild(document.createTextNode(`You are under weight!`));
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message.appendChild(document.createTextNode(`Normal Weight`));
    } else {
      message.appendChild(document.createTextNode(`You are overweight!`));
    }
  }
});


```

## Project 3

```javascript

const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid numbe`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  let newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5

```javascript

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);

```