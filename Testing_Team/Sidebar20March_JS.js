const selectElement = (element) => document.querySelector(element);
const header = selectElement('header');
const mainContent = selectElement('main');
const nav_icon = selectElement('i');
selectElement('.hamburger').addEventListener('click', () => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
    // Code start
    if (mainContent.classList.contains('active')) {
        nav_icon.classList.remove('fa-bars');
        nav_icon.classList.add('fa-times');
    } else {
        nav_icon.classList.remove('fa-times');
        nav_icon.classList.add('fa-bars');
    }
    // Code end 
});

window.onclick = (event) => {
    if (event.target.matches('.active')) {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            mainContent.classList.remove('active');

        }
    }
};