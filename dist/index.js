"use strict";
const theKey = document.getElementById('key');
const textarea = document.getElementById('textarea');
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
let newText = '';
btnEncrypt.addEventListener('click', () => {
    const key = +theKey.value;
    for (let letter of textarea.value) {
        if (!listLetters.includes(letter)) {
            continue;
        }
        const indexLetter = listLetters.findIndex(item => item === letter);
        let newIndex = indexLetter + key;
        if (newIndex > 26) {
            newIndex -= 27;
        }
        newText += listLetters[newIndex];
        textarea.value = newText;
    }
    newText = '';
});
btnDecrypt.addEventListener('click', () => {
    const key = +theKey.value;
    for (let letter of textarea.value) {
        if (!listLetters.includes(letter)) {
            continue;
        }
        const indexLetter = listLetters.findIndex(item => item === letter);
        let newIndex = indexLetter - key;
        if (newIndex < 0) {
            newIndex += 27;
        }
        newText += listLetters[newIndex];
        textarea.value = newText;
    }
    newText = '';
});
