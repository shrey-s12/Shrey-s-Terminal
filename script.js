const body = document.body;
const terminal = document.getElementById('terminal')

//All p tags
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');

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
        t4.style.visibility = "visible";
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
let str = "To get started; type help and press Enter!!";
// let printCharacterByCharacter = (str1) => {
//     let i = 0;
//     cursor.style.visibility = 'visible';
//     let printText = setInterval(() => {
//         animatedText1.innerHTML += str1.charAt(i);
//         i++;
//         if (i >= str1.length) {
//             clearInterval(printText);
//             cursorAnimation();
//         }
//     }, 40);
// };

// Start Animation
let startAnimation = () => {
    printCharacterByCharacter(str);
};

// fetch the data from greeter.json file


async function greedFunction() {
    const url = 'greeting.json';
    let response = await fetch(url);
    let lang = await response.json();

    let randNo = Math.floor(Math.random() * lang.length);
    return [lang[randNo].hello, lang[randNo].language]
};

// 1. Help Function
let helpFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;

    let langUsed = await greedFunction();

    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! These are the only commands that are currently supported: help, resume, bio, linkedin, random, github, contact, date, internship. But don't try to gain access by running commands like sudo. These commands will come soon: projects, clear, new, man, home.`;
    printCharacterByCharacter(str);
});

// 2. Resume Function
let resumeFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get me resume here: https://drive.google.com/file/d/18QHfFImnBWLfBIA7VcSdu8b_bZbbvO9e/view?usp=sharing. Hold on, opening in a new tab. Please check if the pop-ups are not blocked.`;
    printCharacterByCharacter(str);
    setTimeout(() => {
        window.open(`https://drive.google.com/file/d/15SPitKbVKBev5gqkxA9wkPyovw0-4lAs/view?usp=sharing`);
    }, 7000);
});

// 3. Bio Function
let bioFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! I am currently in my final year of pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering. With a strong foundation in programming and software development, I am passionate about leveraging technology to solve real-world problems. My academic journey has equipped me with skills in web development, data structures, algorithms, and emerging technologies, preparing me for a dynamic career in the tech industry.`;
    printCharacterByCharacter(str);
});

// 4. Linkedin Function
let linkedinFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get my linkedin profile here: https://www.linkedin.com/in/shrey-singhal-448690262/. Hold on, opening in a new tab. Please check if the pop-ups are blocked`;
    printCharacterByCharacter(str);
    setTimeout(() => {
        window.open(`https://www.linkedin.com/in/shrey-singhal-448690262/`, `_blank`);
    }, 6000);
});

// 5. Random Function
let randomFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution ${text}`;
    let langUsed = await greedFunction();

    const url = "fact.json";
    let response = await fetch(url);
    let fact = await response.json();

    let randomFact = Math.floor(Math.random() * fact.length);

    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! Here is a random fact about Shrey: ${fact[randomFact].response}`;
    printCharacterByCharacter(str);

});

// 6. Github Function
let githubFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get my github profile here: https://github.com/shrey-s12. Hold on, opening in a new tab. Please check if the pop-ups are blocked`;
    printCharacterByCharacter(str);
    setTimeout(() => {
        window.open(`https://github.com/shrey-s12`, `_blank`);
    }, 6000);
});

// 7. Contact Function
let contactFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! Shrey Singhal is reachable at: shreynbd@gmail. You maybe be looking for the following commands: linkedin, github.`;
    printCharacterByCharacter(str);
});

// 8. Date Function
let dateFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let currentDate = new Date();

    let str = `${langUsed[0]} (${langUsed[1]})! The Current Date is : ${currentDate.toUTCString()}`;
    printCharacterByCharacter(str);
});

// comming soon Function
let comingsoonFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! This is a special command. Coming soon.....`;
    printCharacterByCharacter(str);
});

// Invalid Command (Error Function)
let errorFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text} !!`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! Whoops, this cannot be done. Please use one of the following available commands: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, clear, new, man, home.`;
    printCharacterByCharacter(str);
});

// 9. Internship Function
let internshipFunction = (async (text) => {
    fixedText1.innerHTML = `Command Execution: ${text}`;
    let langUsed = await greedFunction();
    animatedText1.innerHTML = "";
    let str = `${langUsed[0]} (${langUsed[1]})! During my summer internship at Exploirin, I gained hands-on experience in software development, working on real-world projects that involved web technologies and cloud-based solutions. 
    This journey helped me enhance my programming skills, problem-solving abilities, and teamwork. 
    Here’s my internship certificate: https://drive.google.com/file/d/1oZoRbW1KpS1pm0R-WPuIvDoHKCnxHrbj/view?usp=sharing. Hold on, opening in a new tab. Please check if the pop-ups are not blocked.`;
    printCharacterByCharacter(str);
    setTimeout(() => {
        window.open(`https://drive.google.com/file/d/1oZoRbW1KpS1pm0R-WPuIvDoHKCnxHrbj/view?usp=sharing`);
    }, 19000);
});

// Add a loader animation to simulate processing
let loaderAnimation = () => {
    return new Promise((resolve) => {
        animatedText1.innerHTML = "Processing...";
        setTimeout(() => {
            animatedText1.innerHTML = ""; // Clear the loading text
            resolve();
        }, 1000); // Show the loading for 1 second
    });
};

// Smooth character typing with dynamic speed adjustment
let printCharacterByCharacter = async (str1, speed = 50) => {
    let i = 0;
    cursor.style.visibility = 'visible';
    let printText = setInterval(() => {
        animatedText1.innerHTML += str1.charAt(i);
        i++;
        if (i >= str1.length) {
            clearInterval(printText);
            cursorAnimation();
        }
    }, speed); // Typing speed is now dynamic
};

// Improved smooth transitions
terminal.style.transition = "all 0.3s ease-in-out";

// Updated checkInputValue function to handle 'internship' command
let checkInputValue = async (input) => {
    t2.style.display = "none";
    t4.style.visibility = "hidden";
    await loaderAnimation(); // Display the loader before running the command
    switch (input) {
        case "help":
            helpFunction(input);
            break;
        case "resume":
            resumeFunction(input);
            break;
        case "bio":
            bioFunction(input);
            break;
        case "linkedin":
            linkedinFunction(input);
            break;
        case "random":
            randomFunction(input);
            break;
        case "github":
            githubFunction(input);
            break;
        case "contact":
            contactFunction(input);
            break;
        case "date":
            dateFunction(input);
            break;
        case 'internship':
            internshipFunction(input);
            break;
        case 'projects':
        case 'clear':
        case 'new':
        case 'man':
        case 'home':
            comingsoonFunction(input);
            break;
        default:
            errorFunction(input);
            break;
    }
};


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