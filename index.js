//Burger menu
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__navigation');
const menuItems = document.querySelectorAll('.navigation__link')
const overlay = document.querySelector('.overlay')
if (headerBurger) {
    headerBurger.addEventListener("click", () => {
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        overlay.classList.toggle('open')
    });
}
overlay.addEventListener('click', () => {
    console.log('overlay')
    headerBurger.classList.toggle('_active');
    headerMenu.classList.toggle('_active');
    overlay.classList.toggle('open')
})


// testimonials
const testimonials = document.querySelector('.testimonials__items');
const testimonial = document.querySelectorAll('.test-item');

function generateTestimonials() {
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        div.classList.add("test-item");
        div.innerHTML = testimonial[i].innerHTML;
        testimonials.append(div);
    }
}
window.addEventListener('load', generateTestimonials());
window.addEventListener("resize", () => {
    testimonials.style.left = "0";
    range.value = "0";
});


const testimonialPopup = document.querySelector(".testimonial-popup");
const testimonialClose = document.querySelector(".testimonial-popup-close");
const testimonialContainer = document.querySelector(".testimonial-popup-container");
const testimonial2 = document.querySelectorAll('.test-item');
const overlay2 = document.querySelector(".overlay2");

testimonial2.forEach((elem) => {
    elem.addEventListener('click', () => {
        overlay2.classList.toggle("popup");
        testimonialPopup.classList.add("active");
        testimonialContainer.innerHTML = elem.innerHTML;
        testimonialContainer.lastElementChild.classList.add("popup")
    })
});

testimonialClose.addEventListener('click', () => {
    testimonialPopup.classList.remove("active");
    overlay2.classList.toggle("popup");
});

overlay2.addEventListener('click', () => {
    testimonialPopup.classList.remove("active");
    overlay2.classList.remove("popup");
});


const select = document.getElementById('range');

function selectTestimonials() {
    if (window.matchMedia("(min-width: 1440px)").matches) {
        switch (select.value) {
            case '0':
                testimonials.style.left = '0';
                break;
            case '1':
                testimonials.style.left = '-297px';
                break;
            case '2':
                testimonials.style.left = '-594px';
                break;
            case '3':
                testimonials.style.left = '-891px';
                break;
            case '4':
                testimonials.style.left = '-1188px';
                break;
            case '5':
                testimonials.style.left = '-1486px';
                break;
            case '6':
                testimonials.style.left = '-1783px';
                break;
            case '7':
                testimonials.style.left = '-2080px';
                break;
        }
    } else {
        switch (select.value) {
            case '0':
                testimonials.style.left = '0';
                break;
            case '1':
                testimonials.style.left = '-323px';
                break;
            case '2':
                testimonials.style.left = '-646px';
                break;
            case '3':
                testimonials.style.left = '-969px';
                break;
            case '4':
                testimonials.style.left = '-1292px';
                break;
            case '5':
                testimonials.style.left = '-1615px';
                break;
            case '6':
                testimonials.style.left = '-1938px';
                break;
            case '7':
                testimonials.style.left = '-2261px';
                break;
        }
    }
}
select.addEventListener('input', selectTestimonials);