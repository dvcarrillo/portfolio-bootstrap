// Total number of backgrounds
let BG_IMAGES = 5;
// Colors of each background
var DARK_BG = [0, 2, 3];
var CLEAR_BG = [1, 4];

$(document).ready(function () {
    console.log("window loaded");
    let randNumber = Math.floor(Math.random() * BG_IMAGES);
    setHeaderBackground(randNumber);
    setRotatingTextColor(randNumber);
});

setHeaderBackground = (definedBackground) => {
    let imgUrl = `https://raw.githubusercontent.com/dvcarrillo/portfolio-bootstrap/master/img/home-bg/${definedBackground}.jpg`;

    let headerElement;
    if (headerElement = document.getElementById("home-header")) {
        headerElement.style.background = `url(${imgUrl})`;
        headerElement.style.backgroundPosition = 'center top';
        headerElement.style.backgroundRepeat = 'no-repeat';
        headerElement.style.backgroundSize = 'cover';
    }
}

setRotatingTextColor = (definedBackground) => {
    let rotatingText =  document.getElementById('rotating-text');
    if (DARK_BG.includes(definedBackground)) {
        rotatingText.style.color = 'rgba(255, 255, 255, 0.8)';
    }
    else {
        rotatingText.style.color = 'rgba(30, 39, 46, 0.8)';
    }
}