  const header=document.querySelector('.header');
  const headerControls=document.querySelector('.header__controls');
  const hamburgerMenu=document.querySelector('.hamburger__menu');
  const close=document.querySelector('.header__close');
  const logo=document.querySelector('.logo');
  
  hamburgerMenu.addEventListener('click', function () {
    event.preventDefault();
    header.classList.add('header_active');
    // document.body.style.overflow='hidden';
  });
  
  close.addEventListener('click', function () {
    event.preventDefault();
    header.classList.remove('header_active');
    // document.body.style.overflow='visible';
  });

  logo.addEventListener('click', function () {
    if (header.classList.contains('header_active')) {
      header.classList.remove('header_active');
      // document.body.style.overflow='visible';
    } else {
      header.classList.add('header_active');
      // document.body.style.overflow='hidden';
    }
  });

  headerControls.addEventListener('click', function () {
    header.classList.remove('header_active');
    // document.body.style.overflow='visible';
  });

  