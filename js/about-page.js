let languagesBox = document.querySelector('#languages-box')
let languagesNameElem = document.querySelector('#languages-name');
let languagesFlagElem = document.querySelector('#languages-flag');

languagesBox.addEventListener('mouseover', languagesOver);
languagesBox.addEventListener('mouseout', languagesOut);

let flags = ['ES', 'EN', 'FR'];
let languages = ["spanish", "english", "french"];
let it = 0;

function languagesOver() {
    inst = setInterval(function () {
        languagesNameElem.innerHTML = languages[it];
        languagesFlagElem.innerHTML = flags[it];
        it = (it + 1) % languages.length;
    }, 500);
}

function languagesOut() {
    clearInterval(inst);
    languagesFlagElem.innerHTML = '03';
    languagesNameElem.innerHTML = 'languages spoken fluently';
}