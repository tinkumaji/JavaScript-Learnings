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
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```javascript


```