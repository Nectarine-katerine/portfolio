const feedbackParallax=document.querySelector('.feedback__parallax');
const pictures = feedbackParallax.children;

function moveLayersOnScroll(scroll) {

  Array.from(pictures).forEach(picture => {
    divider = picture.dataset.speed;
    strafe = scroll*divider;
  
    picture.style.transform = `translateY(-${strafe}%)`;
  });
};

window.addEventListener('scroll', e => {
  const scroll = window.pageYOffset;
  moveLayersOnScroll(scroll);
});