const footerSentences = [
    'like what you see?',
    'does it look appealing?',
    'want to hear more?',
    'want to know more?'
]

$(document).ready(function () {
    setRandomFooterSentence();
});

setRandomFooterSentence = () => {
    document.querySelector('#footer-title-sentence').innerHTML = footerSentences[Math.floor(Math.random() * footerSentences.length)];
}
