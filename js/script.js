// selezioniamo gli elementi che ci servogno dal HTML
//elementi per il Countdown
const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions")
//elementi per il numbers
const numbersListEl = document.getElementById("numbers-list")
//seleziono il form dal HTML 
const answersFromEl = document.getElementById("answers-form")
const formControlEl = document.querySelectorAll(".form-control")
const messageEl = document.getElementById("message")

let numbGen = [];
let userNumb = [];
let countdown = 3;


numbersListEl.innerHTML = countdown--;


for (let i = 0; i < 5; i++) {
    let rundomNum = Math.floor(Math.random() * 4) + 1;
    numbGen.push(rundomNum)
    numbersListEl.innerText = numbGen
}


let timer = setInterval(function () {
    countdown--;

    if (countdown === 0) {
        clearInterval(timer);

        answersFromEl.classList.remove('d-none')
        numbersListEl.remove()
    } else {
        countdownEl.innerHTML = countdown;
    }



}, 1000)

answersFromEl.addEventListener("submit", function (e) {
    e.preventDefault()

    userNumb = [];

    formControlEl.forEach((input) => {
        userNumb.push(parseInt(input.value))
    });

    let guessedNumbers = [];

    userNumb.forEach((number) => {
        if (numbGen.includes(number)) {
            guessedNumbers.push(number);
        }
    });
    messageEl.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri : ${guessedNumbers.join(",")}`
});




