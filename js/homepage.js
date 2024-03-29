// Total number of backgrounds
let BG_IMAGES = 5;

// Colors of each background
var DARK_BG = [2, 3];
var CLEAR_BG = [0, 1, 4];
var SELECTED_BG = 0;

$(document).ready(function () {
    SELECTED_BG = Math.floor(Math.random() * BG_IMAGES);
    setHeaderBackground(SELECTED_BG);
    setNavbarColor(SELECTED_BG);
    setRotatingTextColor(SELECTED_BG);
});

fadeOutLoadingScreen = (callback) => {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

$(window).on('load', () => {
    fadeOutLoadingScreen(function () {
        $('#rotating-text').fadeIn();
        $('#loading-screen').fadeOut("slow");
    });
})

$('#navbar-brand').click(() => {
    $('#loading-screen').fadeIn(200);
    setTimeout(() => {
        window.location.href = "index.html";
    }, 250);
});

setHeaderBackground = (definedBackground) => {
    let imgUrl = `https://github.com/dvcarrillo/portfolio-bootstrap/blob/master/img/home-bg/${definedBackground}.jpg?raw=true`;

    let headerElement;
    if (headerElement = document.getElementById("home-header")) {
        headerElement.style.background = `url(${imgUrl})`;
        headerElement.style.backgroundPosition = 'center top';
        headerElement.style.backgroundRepeat = 'no-repeat';
        headerElement.style.backgroundSize = 'cover';
    }
}

setRotatingTextColor = (definedBackground) => {
    let rotatingText = document.getElementById('rotating-text');
    if (CLEAR_BG.includes(definedBackground)) {
        rotatingText.style.color = 'rgba(25, 26, 26, 0.7)';
    }
}

setNavbarColor = (definedBackground) => {
    if (DARK_BG.includes(definedBackground)) {
        document.querySelector("#navbar-brand").style.color = 'rgba(255, 255, 255, 1)';
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.add('nav-link-white');
        });
        document.querySelector("#mobile-menu-btn").style.color = 'rgba(255, 255, 255, 1)';
        $('#nav-btn').removeClass('nav-btn-dark').addClass('nav-btn-clear');
    }
}
