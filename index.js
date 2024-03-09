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