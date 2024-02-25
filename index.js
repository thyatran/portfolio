const btn = document.getElementById("btn");
const linkedinURL = "https://www.linkedin.com/in/thyatran/";

function openInNewTab() {
    window.open(linkedinURL, "_blank");
}

btn.addEventListener("click", openInNewTab);

const btn2 = document.getElementById("btn2");
const dadJokes = "https://thyatran.github.io/dad-jokes-generator/";

function openInNewTab2() {
    window.open(dadJokes, "_blank");
}

btn2.addEventListener("click", openInNewTab2);

const btn3 = document.getElementById("github");
const myGithub = "https://github.com/thyatran";

// open github
function openGithub() {
    window.open(myGithub, "_blank");
}

btn3.addEventListener("click", openGithub);

// open linkedin
const btn4 = document.getElementById("linkedin");

function openLinkedin() {
    window.open(linkedinURL, "_blank");
}

btn4.addEventListener("click", openLinkedin);

// click me button
const btn5 = document.getElementById("btn3");
const working = document.getElementById("work");

let work = true;
let clickCount = 0;

function updateText() {
    if (clickCount >= 10) {
        working.textContent = "You have clicked this more than 10 times already.";
        return;
    }
    if (work) {
        working.textContent = "Working on next one..."
    } else {
        working.textContent = "But I'm still working on it...";
    }
    work = !work;
    clickCount++;
}

btn5.addEventListener("click", updateText);