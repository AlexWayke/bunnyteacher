"use strict"
// Words change =======================
// const textBox = document.querySelector('.change-text').parentElement;
// const text = document.querySelector('.change-text');
// const newText = document.querySelector('.new-text').innerHTML;

// console.log(text)

const randomTimer = function(min, max) {
    return Math.random() * (max - min) + min;
}


const addWord = function() {
    console.log("start");
}
const reduceText = function(e) {
    let text = e.firstElementChild;
    let textCounter = text.innerText.length;
    let i = 1;
    let addTurn = setInterval(() => {
        if (i > textCounter) {
            clearInterval(addTurn);
            addWord();
        } else {
            let changedText = text.innerText.slice(0, -1);
            text.innerText = changedText;
            console.log(textCounter)
        }
    },randomTimer(40, 80));

};

// const addWord = function(){
//     text.classList.remove('chinese')
//     let i = 0;
//     let addTurn = setInterval(() => {
//         if( i > newText.length) {
//             clearInterval(addTurn)
//         } else {
//             text.innerText = newText.slice(0, i++);
//         }
//     }, randomTimer(40, 80));
// };



// textBox.addEventListener("click", function(){
//     // reduceText();
// })
// console.log(newText)
document.addEventListener("click", function(e) {
    reduceText(e.target)
    // console.log(e.target)
    // console.log(e.target.firstElementChild)
    // console.log(e.target.lastElementChild.innerHTML)
})