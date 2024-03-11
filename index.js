// calculator program
const display = document.getElementById('display');

//functions for display, calculate, delete, and clear
function appendToDisplay(input) {
  if (display.value === 'Error'){
    clearDisplay()
  }
  display.value += input;
}

function clearDisplay(){
  display.value = ''
}

function calculate() {
  try {
    display.value = eval(display.value)
  }
  catch (error) {
    display.value = "Error";
  }
}

function deleteOne() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[\d\.\+\-\*\/]/.test(key)){
    appendToDisplay(key);
  }
  else if (key === 'Enter') {
    calculate()
  }
  else if (key === 'Backspace') {
    deleteOne();
  }
})