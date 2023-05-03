// Donation
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


const inputNumber = document.querySelector('.input_number')
const radio = document.querySelectorAll('.radio')
let inputChecked = document.getElementById('100')


//Ограничение количества цифр, переключатель кружочка
inputNumber.addEventListener('input', () => {
    inputNumber.value = inputNumber.value.slice(0, 4); 
    radio.forEach((item) => {
        if(inputNumber.value === item.id) {
            item.checked = true;
        }
        if(inputNumber.value === '' || inputNumber.value !== item.id) {
            item.checked = false;
        } 
    })
});
//Установка значения в поле Amount
radio.forEach((item) => {
    item.addEventListener('click', () => {
        inputNumber.value = item.id;
    });
});