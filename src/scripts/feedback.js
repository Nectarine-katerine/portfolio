 window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  });

  const feedbackParallax=document.querySelector('.feedback__parallax');
  const pictures = feedbackParallax.children;

  function moveLayersOnScroll(wScroll) {

    Array.from(pictures).forEach(picture => {
      divider = picture.dataset.speed;
      strafe = wScroll*divider;
  
      picture.style.transform = `translateY(-${strafe}%)`;
  });
  }

  window.addEventListener('scroll', e => {
    wScroll = window.pageYOffset;
    moveLayersOnScroll(wScroll);
  });
