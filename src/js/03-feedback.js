import throttle  from  "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let formValue = {email: '', message: ''};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(inputFunction, 500));

function inputFunction(e){
  formValue[e.target.name] = e.target.value;
  // console.log(e.target.value)
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue))
}
if (localStorage.hasOwnProperty(LOCALSTORAGE_KEY)){
  formValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
  for (let i in formValue){
    formEl[i].value = formValue[i]
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  formEl.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  // console.log(formValue)
}









// function onFormSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(formEl);
//   formData.forEach((value, name) => console.log(value, name));
//   e.currentTarget.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// function onFormInput(e) {
//   localStorage.getItem(LOCALSTORAGE_KEY);

// }

// function initForm() {
//   localStorage.setItem(LOCALSTORAGE_KEY);
//   }
// initForm();
