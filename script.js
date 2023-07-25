const box = document.querySelector(".btn__color");
console.dir(".btn__color");
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
const text = document.querySelector(".text");

let timer;
let fontSize = 16;
const maxFontSize = 84фп;

startButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  startButton.disabled = true;
  stopButton.disabled = false;

  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    text.style.fontSize = changeFontSize();
    text.style.color = getRandomHexColor();
  }, 1000);

  console.log(evt.target);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(timer);
});

function changeFontSize() {
  if (fontSize < maxFontSize) {
    fontSize += 2;
    // перевиряємо чі новий розмір не більший за максимальний розмір
    fontSize = Math.min(fontSize, maxFontSize);
    text.style.fontSize = fontSize + "px";
  }
}
