
// On Scroll this function call to hidenavbar
var topNavbar = document.getElementById('primary-navbar');



window.onscroll = function () {
    var yPos = window.pageYOffset;
    console.log('OnScroll')
    if (yPos >= 50) {
        console.log('if' + yPos);
        topNavbar.style.display = 'none';
    } else {
        console.log('else' + yPos);
        topNavbar.style.display = 'block';
    }
}
