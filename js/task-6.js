const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const boxesContainerEl = document.getElementById('boxes');
const SIZE_START = 30;
const SIZE_CHANGE = 10;

createButtonEl.addEventListener('click', onCreateButtonClick);
destroyButtonEl.addEventListener('click', onDestroyButtonClick);

function onCreateButtonClick() {
  const numberEl = document.querySelector('#controls input');
  const numberOfBoxes = parseInt(numberEl.value);

  if (!numberOfBoxes || numberOfBoxes > 100 || numberOfBoxes < 1) {
    window.alert('Enter a number from 1 to 100');
    return;
  }

  if (boxesContainerEl.children.length > 0) {
    window.alert('boxes are already populated');
    return;
  }

  boxesContainerEl.insertAdjacentHTML('beforeend', createBoxes(numberOfBoxes));
  numberEl.value = null;
}

function createBoxes(number) {
  let boxesMarkup = '';
  for (let i = 0; i < number; i += 1) {
    const boxSize = SIZE_START + SIZE_CHANGE * i;
    const hex = getRandomHexColor();

    boxesMarkup += `
				<div class="box-container">
          <div class="box-item" style="width:${boxSize}px;height:${boxSize}px;background-color:${hex}">
          ${i + 1}</div>
        </div>`;
  }
  return boxesMarkup;
}

function onDestroyButtonClick() {
  boxesContainerEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
