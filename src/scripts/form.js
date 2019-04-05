const form = document.querySelector('#contact-form');

form.addEventListener('submit', e =>{
  e.preventDefault();

  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;
  
  if(name.value === ''){
    addFormMessage(name, 'Обязательно для заполнения')
  }
  if(email.value === ''){
    addFormMessage(email, 'Обязательно для заполнения')
  }else if(!validateEmail(email.value)){
    addFormMessage(email, 'Неверный email')
  }
  if(message.value === ''){
    addFormMessage(message, 'Обязательно для заполнения')
  }
});

[...form.elements].forEach((input) => {
  input.addEventListener('focus', e =>{
    let elem = e.currentTarget.parentElement.parentElement;
    
    let messElem = elem.querySelector('.form__error');
    if(messElem){
      elem.removeChild(messElem);
    }
    
    elem.classList.remove('form__group_error');
  });
});

function addFormMessage(elem, message){
  let parrent = elem.parentElement.parentElement;
  
  let messagContainer = document.createElement('div');
  messagContainer.classList.add('form__error');
  messagContainer.innerHTML = message;
  parrent.appendChild(messagContainer);
  
  parrent.classList.add('form__group_error');
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}