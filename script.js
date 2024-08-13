let body = document.body;
const terminal = document.getElementById('terminal')

// All text fields are selected 
const fixedText1 = document.getElementById('fixedText1');
const fixedText2 = document.getElementById('fixedText2');
const fixedText3 = document.getElementById('fixedText3');
const animatedText1 = document.getElementById('animatedText1');

// Text field entered for terminal
const termText1 = document.getElementById('termText1');
const termText2 = document.getElementById('termText2');
const termText3 = document.getElementById('termText3');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

//Input field text
const textField = document.getElementById('textField')

//Loading cursor element for display
const cursor = document.getElementById('cursor');

// Function that print the Help Row
let loadTerminalText = (() => {
    setTimeout(() => {
        text1.innerHTML = "Shrey Singhal@ShreySinghal";
        text2.innerHTML = " (main) ";
        text3.innerHTML = " ~> ";
    }, 2000);
    setTimeout(() => {
        // Select text present in the input tag
        textField.value = "help";
        textField.focus();
        textField.select();
    }, 2400);
});

// Function that Blink the curser
let cursorAnimation = (() => {
    // Set the cursor's initial visibility
    cursor.style.visibility = "visible";

    // Start blinking the cursor
    let count = 0;
    let blinkCurser = setInterval(() => {
        cursor.style.visibility = (cursor.style.visibility === "visible" ? "hidden" : "visible");
        count++;
        if (count == 4) {
            clearInterval(blinkCurser);
        }
    }, 400);
    cursor.style.visibility = "hidden";
    loadTerminalText();
});

// Function that print Character By Character
const str = "To get started; type help and press Enter!!";
let printCharacterByCharacter = ((str) => {
    let i = 0;
    let printText = setInterval(() => {
        animatedText1.innerHTML += str.charAt(i);
        i++;
        if (i >= str.length) {
            clearInterval(printText);
            cursorAnimation();
        }
    }, 40);
});

// Start Animation
let startAnimation = (() => {
    printCharacterByCharacter(str);
});

let checkInputValue = ((input) => {
    switch (input) {
        case "help":
            helpFunction()
            break;

        default:
            errorFunction();
            break;
    }
});


// Functions for performing various input commands
let inputCommand = ((e) => {
    if (e.key == "Enter") {
        checkInputValue(textField.value);
    }
});

// Generate Random Color
let getRandomColor = (() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
});

// Set the Background Color
let setBackgroundColor = (() => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);

    body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
});

setBackgroundColor();
terminal.addEventListener('animationend', startAnimation);
textField.addEventListener('keypress', inputCommand);