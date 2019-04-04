const myForm=document.querySelector('#myForm');
const formButton=document.querySelector('#formButton');

formButton.addEventListener('click', function(event){
  event.preventDefault();
  function showError(input) {
    var input = document.querySelectorAll ('.input')

    for (i=0; i<input.length; i++) {
      input[i].classList.add='input_error'
    }
  }
  function validateForm(myForm) {

    let valid = true;

    if(!validateField(myForm.elements.name)) {
      valid=false;
    }
    if(!validateField(myForm.elements.email)) {
      valid=false;
    }
    if(!validateField(myForm.elements.comment)) {
      valid=false;
    }
    return valid;
  };

  function validateField(field) {

      if (!field.checkValidity()){
        showError();
        return false;
      } else {
        input.classList.remove='input_error'
        return true;
      }
  }
});