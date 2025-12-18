const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 160);
})

let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlinks.classList.remove('open');
}
if (typeof ScrollReveal !== 'undefined') {
    const animate = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    animate.reveal('.home-left, .heading, .features-img, .social-icons', { origin: 'left' });
    animate.reveal('.home-right, .features-content, .card, .contact-left', { origin: 'right' });
    
}



const scrollBtn = document.querySelector('.scroll-btn');

if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}