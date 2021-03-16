// Change styles on the fixed header

const fixedHeader = () => {
    const header = document.getElementById('header');
    const headerHeight = header.clientHeight;

    window.onscroll = () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    }
}

fixedHeader();

// Burger menu

const burgerHandler = () => {
    const headerBurger = document.getElementById('header__burger');
    const navMenu = document.getElementById('nav');
    const headerLogo = document.getElementById('header__logo');
    const navMenuClose = document.getElementById('nav__close');

    headerBurger.addEventListener('click', () => {
        navMenu.classList.add('nav--fixed');
        headerLogo.classList.add('header__logo--fixed');
    });

    navMenuClose.addEventListener('click', () => {
        navMenu.classList.remove('nav--fixed');
        headerLogo.classList.remove('header__logo--fixed');
    });
}

burgerHandler();