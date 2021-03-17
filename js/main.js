// Fixed header
const fixedHeader = () => {
    const header = document.getElementById('header');

    window.onscroll = () => {
        if (window.scrollY > 100) {
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


// Slider
const slider = () => {
    const dots = document.querySelectorAll('.slider__dots-item');
    const dotsAria = document.getElementById('slider__dots');
    const slides = document.querySelectorAll('.slider__item');
    const btnPrevious = document.getElementById('arrow-left');
    const btnNext = document.getElementById('arrow-right');

    const activeDotClass = 'slider__dots-item--active';
    let slideIndex = 1;

    const showSlides = (n) => {
        if (n < 1) {
            slideIndex = slides.length;
        } else if (n > slides.length) {
            slideIndex = 1;
        }

        for (let slide of slides) {
            slide.style.display = 'none';
        }

        for (let dot of dots) {
            dot.classList.remove(activeDotClass);
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add(activeDotClass);
    }

    showSlides();

    btnPrevious.addEventListener('click', () => {
        showSlides(slideIndex += (-1));
    });

    btnNext.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    setInterval(() => {
        showSlides(slideIndex += 1);
    }, 2000);
}

slider();


// Smooth scroll
const smoothScroll = () => {
    const smoothScroll = function (targetEl, duration) {
        const headerHeight = document.getElementById('header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}

smoothScroll();