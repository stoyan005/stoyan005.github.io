const words = [
    "HTML & CSS",
    "JavaScript",
    "Python"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.querySelector(".languages");

function type() {
const currentWord = words[wordIndex];
el.textContent = currentWord.slice(0, charIndex);

if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);

} else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
    
} else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
    wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
}
}

window.addEventListener("DOMContentLoaded", type);
