let valueH2 =  document.querySelector("#value");
let value = parseInt(valueH2.textContent);

let buttons = document.querySelectorAll("button");
let sumBtn = document.querySelector("#sum");
let subtractBtn = document.querySelector("#subtract");
let resetBtn = document.querySelector("#reset");
let internCounter = false;
let audio = new Audio("soundOfClick.mp3");

sumBtn.addEventListener("click", this.sum);
subtractBtn.addEventListener("click", this.subtract);
resetBtn.addEventListener("click", this.reset);

sumBtn.addEventListener("click", this.popUp);
subtractBtn.addEventListener("click", this.popUp);
resetBtn.addEventListener("click", this.popUp);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

function sum () { 
    value++;
    valueH2.textContent = value;
} 
function subtract () {
    value--;
    valueH2.textContent = value;
 } 
function reset () { 
    value = 0;
    valueH2.textContent = 0;
} 

function popUp () {
   if (!internCounter) {
    internCounter = true;  
  if (value < 0) {
    alert("This is a negative number")
  } else if (value > 0) {
    alert("This is positive number")
  } 
 }
}
