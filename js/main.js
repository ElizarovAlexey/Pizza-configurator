// Change styles on the fixed nav

const fixedNav = () => {
    const nav = document.getElementById('nav');
    const navHeight = nav.clientHeight;

    window.onscroll = () => {
        if (window.scrollY > navHeight) {
            nav.classList.add('nav--fixed');
        } else {
            nav.classList.remove('nav--fixed');
        }
    }
}

fixedNav();