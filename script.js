const text = document.getElementById("typing-text");

const words = [
    "Virtual Assistant",
    "Data Entry Specialist",
    "Web Developer",
    "Computer Support"
];

let wordIndex = 0;
let letterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        text.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;


        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        text.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }


    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


typeEffect();
