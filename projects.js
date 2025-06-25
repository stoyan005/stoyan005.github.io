const counterEl = document.querySelector('.counter_1');
let counterNumber = 0;

const updateCounter = setInterval(function () {
    counterNumber++;
    counterEl.textContent = counterNumber;

    if (counterNumber >= 10) {
        clearInterval(updateCounter);
    }
},300)

const counterEle = document.querySelector('.counter_2');
let counterNumber1 = 0;

const updateCounter1 = setInterval(function () {
    counterNumber1++;
    counterEle.textContent = counterNumber1;

    if (counterNumber1 >= 11) {
        clearInterval(updateCounter1);
    }
},260)

const counterElem = document.querySelector('.counter_3');
let counterNumber2 = 0;

const updateCounter2 = setInterval(function () {
    counterNumber2++;
    counterElem.textContent = counterNumber2;

    if (counterNumber2 >= 150) {
        clearInterval(updateCounter2);
    }
},20)