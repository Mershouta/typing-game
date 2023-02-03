function getKey (e) {
    let location = e.location;
    let selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]']
    } else {
        let code = e.keyCode || e.which;
        selector = [
            '[data-key="' + code + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
        ].join(',');
    }
    return document.querySelector(selector);
}



function pressKey (char) {
    let key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    if (!key) {
        return console.warn('No key for', char);
    }
    key.setAttribute('data-pressed', 'on');
    setTimeout(function () {
        key.removeAttribute('data-pressed');
    }, 200);
}

let h1 = document.querySelector('h1');
let originalQueue = h1.innerHTML;
let queue = h1.innerHTML;

function next () {
    let c = queue[0];
    queue = queue.slice(1);
    h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
    pressKey(c);
    if (queue.length) {
        setTimeout(next, Math.random() * 200 + 50);
    }
}

h1.innerHTML = "&nbsp;";
setTimeout(next, 500);

document.body.addEventListener('keydown', function (e) {
    let key = getKey(e);
    checkLetter(key)
    console.log(key.textContent)
    if (!key) {
        return console.warn('No key for', e.keyCode);
    }

    key.setAttribute('data-pressed', 'on');
});

document.querySelectorAll('.key--letter').forEach(key => {
    key.addEventListener('click', function (e) {
    let key = e.target;
    console.log(key.textContent)
   
});
})


document.body.addEventListener('keyup', function (e) {
    let key = getKey(e);
    key && key.removeAttribute('data-pressed');
});

function size () {
    let size = keyboard.parentNode.clientWidth / 90;
    keyboard.style.fontSize = size + 'px';
}

let keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
    size();
});
size();

let words = ["Sunlight", "Socket", "Grey", "Station", "Funk", "Cat", "Blurry", "Huge", "Incredible", "Borderline", "Husky", "Hexakosioihexekontahexaphobia", "A", "Attention", "Warning", "Lightning", "Reflexest", "hippopotomonstrosesquippedaliophobia"];
let startButton = document.querySelector(".buttonStart")
let currentWord = ""
let buttonReload = document.querySelector(".reloadButton")
let levelButton = document.querySelector(".nextLevel")
let index = 0
let right = new Audio('./sound/right.mp3');
let wrong = new Audio('./sound/wrong.mp3')
let win = new Audio('./sound/win.mp3')


startButton.addEventListener('click', startGame)
buttonReload.addEventListener('click', pageReload)

function startGame() {
    let title = document.getElementById("reflexest");
    
    if (title.style.display === "none") {
        title.style.display = "block";
      } else {
        title.style.display = "none";
      }
      console.log("START!")

      getWord()
    
}

function getWord() {
    let random = 0
     random = Math.random() * words.length

    if (random > words.length) {
        random = 0
    }

    currentWord = words[Math.floor(random)]
    console.log(currentWord)
    words.splice(random, 1)
    console.log(words)
    document.querySelector(".wordToType").textContent = currentWord

    return currentWord   
}

function checkLetter(key) {
    let pressedLetter = key.textContent
    if (currentWord[index].toUpperCase() === pressedLetter){
        console.log('Nice')
        console.log(`index = ${index}`)
        index ++
        document.querySelector(".points").textContent ++
    } else {
        document.querySelector(".points").textContent --
        wrong.play();
    }
    if (index === currentWord.length) {
        right.play();
        getWord()
        index = 0
    }
    winner()
}

function winner() {
    if (currentWord === undefined){
    win.play();
     document.querySelector(".wordToType").textContent = "~~CHECK YOUR SCORE~~"
    }
    let levelButton = document.querySelector(".nextLevel")
    levelButton.style.display = "block"
}




function pageReload() {
    window.location.reload();
}