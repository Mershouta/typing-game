// function getKey (e) {
//     let location = e.location;
//     let selector;
//     if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
//         selector = ['[data-key="' + e.keyCode + '-R"]']
//     } else {
//         let code = e.keyCode || e.which;
//         selector = [
//             '[data-key="' + code + '"]',
//             '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
//         ].join(',');
//     }
//     return document.querySelector(selector);
// }

// function pressKey (char) {
//     let key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
//     if (!key) {
//         return console.warn('No key for', char);
//     }
//     key.setAttribute('data-pressed', 'on');
//     setTimeout(function () {
//         key.removeAttribute('data-pressed');
//     }, 200);
// }

// let h1 = document.querySelector('h1');
// let originalQueue = h1.innerHTML;
// let queue = h1.innerHTML;

// function next () {
//     let c = queue[0];
//     queue = queue.slice(1);
//     h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
//     pressKey(c);
//     if (queue.length) {
//         setTimeout(next, Math.random() * 200 + 50);
//     }
// }

// h1.innerHTML = "&nbsp;";
// setTimeout(next, 500);

// document.body.addEventListener('keydown', function (e) {
//     let key = getKey(e);
//     if (!key) {
//         return console.warn('No key for', e.keyCode);
//     }

//     key.setAttribute('data-pressed', 'on');
// });

// document.body.addEventListener('keyup', function (e) {
//     let key = getKey(e);
//     key && key.removeAttribute('data-pressed');
// });

// function size () {
//     let size = keyboard.parentNode.clientWidth / 90;
//     keyboard.style.fontSize = size + 'px';
// }

// let keyboard = document.querySelector('.keyboard');
// window.addEventListener('resize', function (e) {
//     size();
// });
// size();

let words = ["Chocolat", "Carotte", "Kiwi", "Salade"];
let startButton = document.querySelector(".buttonStart")
console.log(startButton)

startButton.onclick = () => {startGame()}

function startGame() {
    let random = 0
     random = Math.random() * words.length
    if (random > words.length) {
        random = 0
    }
    let currentWord = words[Math.floor(random)]
    console.log(currentWord)
    return currentWord
}
