"use strict"
// Words change =======================
const textBox = document.querySelector('.change-text').parentElement;
const text = document.querySelector('.change-text');
const newText = document.querySelector('.new-text').innerHTML;

const randomTimer = function(min, max) {
    return Math.random() * (max - min) + min;
}

const reduceText = function() {
    const changedText = text.innerText.slice(0, -1);
    text.innerText = changedText;
    if (changedText.length > 0) {
        setTimeout(reduceText, randomTimer(50, 100));
    } else {
        addWord();        
    }
};

const addWord = function(){
    text.classList.remove('chinese')
    let i = 0;
    let addTurn = setInterval(() => {
        if( i > newText.length) {
            clearInterval(addTurn)
        } else {
            text.innerText = newText.slice(0, i++);
        }
    }, randomTimer(40, 80));
};


textBox.addEventListener("click", function(){
    reduceText();
})

console.log(newText)