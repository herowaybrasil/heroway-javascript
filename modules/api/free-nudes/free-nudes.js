const delayInMS = 1000;

// setTimeout ou window.setTimeout
setTimeout(() => {
  console.log(`Código executado com ${delayInMS} milisegundos de delay`);
}, delayInMS);

/* ----- */

const btn = document.getElementById('btn');
const img = document.getElementById('img');
btn.addEventListener('click', () => {
  img.style.display = 'block';
  
  setTimeout(() => {
    img.style.display = 'none';
  }, 1000);
});

// setInterval ou window.setInterval
setInterval(() => {
  console.log(`Código executado a cada ${delayInMS} milisegundos`);
}, delayInMS);

/* ---- */
