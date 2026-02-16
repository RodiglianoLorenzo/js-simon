// selezioniamo gli elementi che ci servogno dal HTML
//elementi per il Countdown
const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions")
//elementi per il numbers
const numbersListEl = document.getElementById("numbers-list")
//seleziono il form dal HTML 
const answersFromEl = document.getElementById("answers-form")


let numbGen = [];
let countdown = 10;

numbersListEl.innerHTML = countdown--;

 for (let i = 0; i < 5; i++) {
        let rundomNum = Math.floor(Math.random() * 4) + 1;
        numbGen.push(rundomNum)
        numbersListEl.innerText = numbGen
    }

 numbGen = setInterval(function () {
   
    
    if (countdown === 0) {
        clearInterval(numbGen);
        answersFromEl.classList.remove('d-none')
        numbersListEl.remove()
    } else {
        countdownEl.innerHTML = countdown;
    }
    countdown--;

    


}, 1000)


 

