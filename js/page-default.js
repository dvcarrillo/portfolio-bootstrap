$(document).ready(function () {
});

openMobileMenu = () => {
    document.querySelector('#mobile-menu-btn-open').style.display = 'none';
    document.querySelector('#mobile-menu-btn-close').style.display = 'block';
}

closeMobileMenu = () => {
    document.querySelector('#mobile-menu-btn-close').style.display = 'none';
    document.querySelector('#mobile-menu-btn-open').style.display = 'block';
}