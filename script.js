const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        input.value = currentInput;
      } catch {
        input.value = "Error";
        currentInput = "";
      }
    } else if (value === 'AC') {
      currentInput = "";
      input.value = currentInput;
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      input.value = currentInput;
    } else {
      currentInput += value;
      input.value = currentInput;
    }
  });
});
