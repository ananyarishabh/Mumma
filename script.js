const music = document.getElementById("music.mp3");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function yesClick() {
  document.getElementById("msg").innerText =
    "Yayyy 💕 I knew it 😍 I promise I'll always keep you happy 💕  ";
}

function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*100-50}px)`;
}