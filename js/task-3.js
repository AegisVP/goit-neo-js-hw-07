document
  .querySelector('#name-input')
  .addEventListener('input', e => (document.querySelector('#name-output').innerHTML = e.currentTarget.value.trim() || 'Anonymous'));
