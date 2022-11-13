const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const days = document.querySelectorAll('td');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('cross');
    menuItems.classList.toggle('open');
});

days.forEach(day => {
    if (day.children.length != 0) {
        day.addEventListener('click', () => {
            day.children[0].checked = true;
        });
    }
});