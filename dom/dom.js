const input = document.getElementById('input');
const button = document.getElementById('button');

const number = document.getElementById('number');
const result = document.getElementById('result');

input.addEventListener('input', (e) => {
  input.style.color = e.target.value < 0 ? 'red' : 'black';
});

/* ---- */

button.addEventListener('click', () => {
  const parsedValue = Number(input.value);

  if (Number.isNaN(parsedValue)) {
    result.style.color = 'red';
    result.textContent = 'ERROR!';
  } else {
    number.textContent = parsedValue;
    result.textContent = parsedValue + 10;
  }
});