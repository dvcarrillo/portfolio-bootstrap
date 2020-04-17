let BG_IMAGES = 5;

window.onload = () => {
    console.log("window loaded");
    setRandomHeaderBackground();
}

setRandomHeaderBackground = () => {
    let randNumber = Math.floor(Math.random() * 6);
    let headerElement;
    if(headerElement = document.getElementById("home-header")) {
        headerElement.style.background = `url(../img/home-bg/${randNumber}.jpg) no-repeat center`;
    }

}