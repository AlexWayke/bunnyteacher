"use strict"
// Words change =======================
const textBox = document.querySelectorAll('.change-box');


const randomTimer = function(min, max) {
    return Math.random() * (max - min) + min;
}

const reduceText = function(e) {
    let text = e.firstElementChild;
    text.parentElement.classList.remove('change-box')
    let i = 0;
    let addTurn = setInterval(() => {
        if (i >= text.innerHTML.length) {
            clearInterval(addTurn);
            addText(e);
        } else {
            let changedText = text.innerText.slice(0, -1);
            text.innerText = changedText;
        }
    },randomTimer(40, 80));
    
};

const addText = function(e) {
    let text = e.firstElementChild;
    let newText = e.lastElementChild.innerHTML
    text.classList.remove('chinese')
    let i = 0;
    let addTurn = setInterval(() => {
        if( i > newText.length) {
            clearInterval(addTurn)
        } else {
            text.innerText = newText.slice(0, i++);
        }
    }, randomTimer(40, 80));
}

textBox.forEach( function(e) {
    e.addEventListener("click", function(e) {
        if(e.target.classList.contains('change-box')){
            reduceText(e.target);
        }
    });
})