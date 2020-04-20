const footerSentences = [
    'like what you see?',
    'looks appealing?',
    'want to hear more?',
    'want to know more?',
    'don\'t be shy',
    'sounds good?',
    'are you curious?'
]

$(document).ready(function () {
    setRandomFooterSentence();
    $(function() {
        $("#body-container").animate({ opacity: 1 }, { duration: 800, queue: false });
        $("#body-container").animate({ "margin-top": "100px" }, { duration: 400, queue: false });
    });
    $('.header-title').fadeIn();
});

setRandomFooterSentence = () => {
    document.querySelector('#footer-title-sentence').innerHTML = footerSentences[Math.floor(Math.random() * footerSentences.length)];
}
