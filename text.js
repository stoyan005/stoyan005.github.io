const counterEl = document.querySelector('.counter');
let counterNumber = 0;

const updateCounter = setInterval(function () {
    counterNumber++;
    counterEl.textContent = counterNumber;

    if (counterNumber >= 100) {
        clearInterval(updateCounter);
    }
},1)