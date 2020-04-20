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
});

setRandomFooterSentence = () => {
    document.querySelector('#footer-title-sentence').innerHTML = footerSentences[Math.floor(Math.random() * footerSentences.length)];
}
