const bgColorDisplayEl = document.querySelector('.color');
const changeColorButtonEl = document.querySelector('.change-color');
let bgColor = '#FFFFFF';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function updateBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  bgColorDisplayEl.textContent = newColor;
}

changeColorButtonEl.addEventListener('click', updateBackgroundColor);
updateBackgroundColor();
