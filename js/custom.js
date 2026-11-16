/* -------------------------------------------------
   MOBILE NAVIGATION
------------------------------------------------- */
const menuBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.nav-overlay');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

/* OPEN MENU */
menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
});

/* CLOSE MENU */
const closeMenu = () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');

    document.querySelectorAll('.mobile-submenu')
        .forEach(item => item.classList.remove('active'));
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

/* MOBILE SUBMENU (SMOOTH HEIGHT) */
submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const parent = toggle.parentElement;
        const submenu = parent.querySelector('.submenu');

        parent.classList.toggle('active');

        if (parent.classList.contains('active')) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        } else {
            submenu.style.maxHeight = 0;
        }
    });
});


/* -------------------------------------------------
   GO TO TOP BUTTON
------------------------------------------------- */
$(window).on('scroll', function () {
    const scrolled = $(window).scrollTop();

    if (scrolled > 600) {
        $('.go-top').addClass('active');
    } else {
        $('.go-top').removeClass('active');
    }
});

$('.go-top').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});


/* -------------------------------------------------
   BLOG SWIPER SLIDER
------------------------------------------------- */

var swiper = new Swiper(".blogs__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        200: { slidesPerView: 1 },
        479: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
    }
});
