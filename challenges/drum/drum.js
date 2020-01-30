function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if (!audio) return; // handle null keys

  audio.currentTime = 0; // reset audio and allow fast play
  audio.play();
  key.classList.add('playing');
}

function endSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!key) return;

  key.classList.remove('playing');
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', playSound);
  document.addEventListener('keyup', endSound);
});
