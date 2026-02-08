const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const letterText = document.getElementById("letterText");
const music = document.getElementById("bgMusic");
const specialContent = document.getElementById("specialContent");
const timeCount = document.getElementById("timeCount");

const startDate = new Date("2025-04-24T00:00:00");

let index = 0;
let timerInterval = null;

const letter = `
Happy Valentine’s Day, my love ❤️

From the moment you came into my life,
everything felt warmer, safer, and happier.
This little website is just a tiny reflection
of how big my love for you is.

Thank you for being you.
Thank you for loving me.
Thank you for choosing me.
And I hope I get to choose you
in every single life 💕
`;

const signature = "— Your BabyGirll ❤️";

yesBtn.addEventListener("click", () => {
  yesBtn.disabled = true;
  music.play();

  question.innerText = "I knew ittt! 💘";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  specialContent.classList.remove("hidden");
  specialContent.classList.add("fade-in");

  index = 0;
  letterText.innerHTML = "";
  typeLetter();

  updateTimeTogether();
  if (!timerInterval) {
    timerInterval = setInterval(updateTimeTogether, 1000);
  }
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
});

function typeLetter() {
  if (index < letter.length) {
    letterText.innerHTML += letter.charAt(index);
    index++;
    setTimeout(typeLetter, 45);
  } else {
    setTimeout(() => {
      const sign = document.createElement("p");
      sign.style.marginTop = "20px";
      sign.style.color = "#ff3366";
      sign.style.fontWeight = "600";
      sign.innerText = signature;
      letterText.appendChild(sign);
    }, 400);
  }
}

function updateTimeTogether() {
  let diff = Math.floor((new Date() - startDate) / 1000);

  const years = Math.floor(diff / (365*24*60*60));
  diff %= (365*24*60*60);

  const days = Math.floor(diff / (24*60*60));
  diff %= (24*60*60);

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  timeCount.innerText =
    `${years} years, ${days} days, ${minutes} minutes, ${seconds} seconds`;
}

const heartsContainer = document.querySelector(".hearts");
const emojis = ["❤️","💖"];

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = Math.random()*20 + 15 + "px";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
