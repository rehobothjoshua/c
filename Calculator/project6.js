const display = document.getElementById('sreen');
const totalCalculate = document.getElementById('totalCal')
document.addEventListener('keydown', 
  function (event) {
    let key = event.key;
    if (key === 'Enter') {
      calculate();
    } else if (key === '-' || key === '+' || key === '/' || key === '*') {
      append(key);
    } else if (key >= 0 && key <= 9) {
      append(key);
    } else if (key === 'Backspace') {
      totalCalculate.innerText = `${display.value}`
      deleteLast();
    } else if (key === 'Escape') {
      clearDisplay();
      totalCalculate.innerText = `${display.value}`

    }
})





  function append(value) {
    display.value += value;
  }
function clearDisplay() {
  display.value = '';
  totalCalculate.innerText = `${display.value}`;
}
function deleteLast() {
  display.value = display.value.slice(0, -1)
}
function calculate() {
  try {
    display.value = eval(display.value)
  } catch {
    display.value = 'Error';
  }
  totalCalculate.innerText = `${display.value}`
}



