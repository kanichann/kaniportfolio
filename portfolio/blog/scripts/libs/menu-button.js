const menuButton = document.querySelector('.header__menu');
const menuContainer = document.querySelector('.header__container')
menuButton.addEventListener('click',function(){
    // menuButton.classList.toggle('open');
    menuContainer.classList.toggle('open');
})
