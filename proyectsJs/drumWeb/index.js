function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0; // reinicia el audio para que vaya más rápido
  audio.play();
  const keynote = document.querySelector(`div[data-key="${e.code}"]`);
  keynote.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".note");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

document.addEventListener("keydown", playSound);
