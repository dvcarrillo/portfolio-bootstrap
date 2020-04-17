let BG_IMAGES = 4;

$(document).ready(function () {
    console.log("window loaded");
    setRandomHeaderBackground();
});

setRandomHeaderBackground = () => {
    let randNumber = Math.floor(Math.random() * BG_IMAGES);
    let imgUrl = `https://raw.githubusercontent.com/dvcarrillo/portfolio-bootstrap/master/img/home-bg/${randNumber}.jpg`;
    
    let headerElement;
    if (headerElement = document.getElementById("home-header")) {
        headerElement.style.background = `url(${imgUrl})`;
        headerElement.style.backgroundPosition = 'center top';
        headerElement.style.backgroundRepeat = 'no-repeat';
        headerElement.style.backgroundSize = 'cover';
    }
}