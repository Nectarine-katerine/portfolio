class Valid {
  constructor(options) {
      this.form = options.element;
      this.emailError = 'js-email-error';
      this.nameError = 'js-name-error';
      this.messageError = 'js-message-error';
      this.inputSuccess = false;

      this.emptyErrorMessage = 'Поле не может быть пустым';
      this.incorrectEmailMessage = 'Некорректный email адрес';
  }

  init() {
      this._initElements();
      this._bindEnents();
  }

  _initElements() {
      this.$form = document.querySelector(`${this.form}`);
      this.$name = this.$form.elements.name;
      this.$email = this.$form.elements.email;
      this.$emailError = this.$form.querySelector(`.${this.emailError}`);
      this.$nameError = this.$form.querySelector(`.${this.nameError}`);
      this.$messageError = this.$form.querySelector(`.${this.messageError}`);
      this.$message = this.$form.elements.comment;

      console.log(this.$name, this.$email, this.$message);
  }

  _bindEnents() {
      this.$form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isValidEmail = event.target.checkValidity();
        const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
        const regEmail = new RegExp(emailStr, 'u');

          if (this.$email.value == '') {
              this.$emailError.innerHTML = this.emptyErrorMessage;
          } else if(!(isValidEmail && regEmail.test(this.$email.value))) {
              this.$emailError.innerHTML = this.incorrectEmailMessage;
          } else {
              this.$emailError.innerHTML = '';
          }

          if (this.$name.value == '') {
              this.$nameError.innerHTML = this.emptyErrorMessage;
          } else {
              this.$nameError.innerHTML = '';
          }

          if (this.$message.value == '') {
              this.$messageError.innerHTML = this.emptyErrorMessage;
          } else {
              this.$messageError.innerHTML = '';

              return inputSuccess
          }
      });
  }

  // _sendMessage
}

export default Valid;


// const form = document.querySelector('#contact-form');
// const formButton = document.querySelector('#formButton');

// form.addEventListener('submit', e =>{
//   e.preventDefault();

//   const name = form.elements.name;
//   const email = form.elements.email;
//   const message = form.elements.message;
  
//   if(name.value === ''){
//     addFormMessage(name, 'Обязательно для заполнения')
//   }
//   if(email.value === ''){
//     addFormMessage(email, 'Обязательно для заполнения')
//   }else if(!validateEmail(email.value)){
//     addFormMessage(email, 'Неверный email')
//   }
//   if(message.value === ''){
//     addFormMessage(message, 'Обязательно для заполнения')
//   }
// });

// [...form.elements].forEach((input) => {
//   input.addEventListener('focus', e =>{
//     let elem = e.currentTarget.parentElement.parentElement;
    
//     let messElem = elem.querySelector('.form__error');
//     if(messElem){
//       elem.removeChild(messElem);
//     }
    
//     elem.classList.remove('form__group_error');
//   });
// });

// function addFormMessage(elem, message){
//   let parrent = elem.parentElement.parentElement;
  
//   let messagContainer = document.createElement('div');
//   messagContainer.classList.add('form__error');
//   messagContainer.innerHTML = message;
//   parrent.appendChild(messagContainer);
  
//   parrent.classList.add('form__group_error');
// }

// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }