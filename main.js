function sandwich() {
  const toggleMenu = document.querySelector('.sandwich');
  const menu = document.querySelector('.nav');


  toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  })


}

sandwich();
