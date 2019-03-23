const menu=document.querySelector('.menu');
  const hamburgerMenu=document.querySelector('.hamburger__menu');
  const menuLink=document.querySelectorAll('.menu__link');
  const close=document.querySelector('.close');
  const logo=document.querySelector('.logo');
  
  for(var i=0; i<menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
      menu.style.right='-9999px';
      document.body.style.overflow='visible';
    });
    };

  hamburgerMenu.addEventListener('click', function () {
    event.preventDefault();
    menu.style.right=0;
    // document.body.style.overflow='hidden';
  });
  
  close.addEventListener('click', function () {
    event.preventDefault();
    menu.style.right='';
    document.body.style.overflow='visible';
  });

  logo.addEventListener('click', function () {
    menu.style.right='';
    document.body.style.overflow='visible';
  });

  menu.addEventListener('click', function () {
    menu.style.right='';
    document.body.style.overflow='visible';
  });