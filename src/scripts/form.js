// const button=document.querySelector('#formButton');
// const template = document.querySelector("#modal-template").innerHTML;
// var wrapper = document.querySelector(".wrapper");
// const modal = createModal();

// function createModal() {
//   var container = document.createElement('div');
//   container.className = 'popup';
//   container.innerHTML = template;

//   const contentBlock = container.querySelector('.popup__content');

//   var closeBtn=container.querySelector('.popup__close');

//   closeBtn.addEventListener('click', e => {
//     event.preventDefault();
//     wrapper.removeChild(container);
//   })

//   var overlay = container.querySelector('.overlay');
//   overlay.addEventListener('click', e => {
//     if (e.target === overlay) {
//       closeBtn.click();
//     }
//   })
//   return {
//     open(){
//       wrapper.appendChild(container);
//     },
//     close(){
//       closeBtn.click();
//     },
//     setContent(content){
//       contentBlock.innerHTML=content;
//     }
//   };
// }


// const myForm=document.querySelector('#myForm');
// const formButton=document.querySelector('#formButton');

// formButton.addEventListener('click', function(event){
//   event.preventDefault();
//   if (validateForm(myForm)) {
//     const name=myForm.elements.name.value;
//     const email=myForm.elements.email.value;
//     const comment=myForm.elements.comment.value;
//     var formData=new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('comment', comment);
//     const xhr=new XMLHttpRequest();
//     xhr.responseType='json';
//     xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//     xhr.send(formData);
//     xhr.addEventListener('load', e => {
//       if (xhr.response.status){
//             modal.setContent('Сообщение отправлено');
//             modal.open();
//             setTimeout(e=>{
//                 modal.close();
//             }, 3000);
            
//     } else if ((xhr.response.status == 0)) {
//         modal.setContent('Отправить письмо не удалось, повторите запрос позже');
//         modal.open();
//         setTimeout(e=>{
//           modal.close();
//       }, 3000);
//     }
//     });
//   }
// });

// function validateForm(myForm) {
//   let valid = true;

//   if(!validateField(myForm.elements.name)) {
//     valid=false;
//   }
//   if(!validateField(myForm.elements.email)) {
//     valid=false;
//   }
//   if(!validateField(myForm.elements.comment)) {
//     valid=false;
//   }
//   return valid;
// };

// function validateField(field) {
//   if (!field.checkValidity()){
//     field.nextElementSibling.textContent = field.validationMessage;
//     return false;
// }
// else {
//     field.nextElementSibling.textContent = '';
//     return true;
// }
// }