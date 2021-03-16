const navSlide = () => {
    const burger = document.querySelector('.burgerMenu');
    const nav = document.querySelector('.navLinks');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive'); 
    });

}

navSlide();