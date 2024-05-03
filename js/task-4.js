const formEl = document.querySelector('.login-form');

const onFormSubmit = e => {
  e.preventDefault();

  const userdata = {
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
  };

  if (userdata.email === '' || userdata.password === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(userdata);
  formEl.reset();
};

formEl.addEventListener('submit', onFormSubmit);
