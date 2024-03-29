const footerSentences = [
    'like what you see?',
    'looks appealing?',
    'want to hear more?',
    'want to know more?',
    'don\'t be shy',
    'sounds good?',
    'are you curious?'
]

$(document).ready(() => {
    setRandomFooterSentence();
});

$(window).on('load', () => {
    $(function() {
        $("#body-container").animate({ opacity: 1 }, { duration: 800, queue: false });
        $("#body-container").animate({ "margin-top": "100px" }, { duration: 400, queue: false });
    });
    $('.header-title').fadeIn();
});

$('#navbar-brand').click(() => {
    $('#loading-screen').fadeIn(200);
    setTimeout(() => {
        window.location.href = "index.html";
    }, 250);
});

setRandomFooterSentence = () => {
    document.querySelector('#footer-title-sentence').innerHTML = footerSentences[Math.floor(Math.random() * footerSentences.length)];
}
