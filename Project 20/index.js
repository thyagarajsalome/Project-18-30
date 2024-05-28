const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach(kit => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = `url(images/${kit}.png)`;
  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");
  audioEl.src = `sounds/${kit}.mp3`;
  containerEl.appendChild(audioEl);

  const playSound = () => {
    audioEl.currentTime = 0; // Reset audio to start
    audioEl.play();
    btnEl.style.transform = "scale(.9)";
    setTimeout(() => {
      btnEl.style.transform = "scale(1)";
    }, 100);
  };

  btnEl.addEventListener("click", playSound);
  window.addEventListener("keydown", event => {
    if (event.key === kit[0]) {
      playSound();
    }
  });
});
