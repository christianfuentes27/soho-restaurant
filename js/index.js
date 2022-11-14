const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menu = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('cross');
    menuItems.classList.toggle('open');
    for (let a of menu) {
        if (a.style.display === "block") {
            a.style.display = "none";
        } else {
            a.style.display = "block";
        }
    }
});
