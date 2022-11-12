const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('cross');
    menuItems.classList.toggle('open');
});