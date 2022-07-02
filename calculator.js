let buttons = document.getElementsByClassName('calc-button');
let screen = document.getElementById("screen");
let equals = document.getElementById("equals");
let reset = document.getElementById("reset");
let remove = document.getElementById("remove");
let screenText = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    let value = buttons[i].innerHTML;
    screenText += value;
    screen.innerHTML = screenText;
  })
}

equals.addEventListener("click", function() {
  let numbers = screenText.split(/\+|\−|\=|\÷|\×/g);

  if (screenText.includes("−")) {
   let minus = Number(numbers[0]) - Number(numbers[1]);
   screen.innerHTML = minus;
  }

  if (screenText.includes("+")) {
   let plus = Number(numbers[0]) + Number(numbers[1]);
   screen.innerHTML = plus;
  }

  if (screenText.includes("÷")) {
   let divide = Number(numbers[0]) / Number(numbers[1]);
   screen.innerHTML = divide;
  }

  if (screenText.includes("×")) {
   let multiple = Number(numbers[0]) * Number(numbers[1]);
   screen.innerHTML = multiple;
  }

})

reset.addEventListener("click", function() {
  screenText = 0;
  screen.innerHTML = screenText;
  screenText = "";
})

// remove.addEventListener("click", function() {
//   let remove = screenText.substring(0, screenText.length - 1);
//   console.log("screenText");
// })
