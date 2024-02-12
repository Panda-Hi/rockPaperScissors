// Komputer losuje co wybral

function pcRandom() {
  // funkcja wybierajaca rock/paper/scissors
  const number = Math.floor(Math.random() * 3 + 1);
  switch (number) {
    case 1:
      pcChoice = "Rock";
      break;
    case 2:
      pcChoice = "Paper";
      break;
    case 3:
      pcChoice = "Scissors";
      break;
  }
}
// Uzytkownik wybiera co chce
let pcChoice = "";
let userChoice;
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    pcRandom(); // losowany wybor Pc
    const style = e.currentTarget.classList;
    if (style.contains("Rock")) {
      // wybierany wybor Usera
      userChoice = "Rock";
    } else if (style.contains("Paper")) {
      userChoice = "Paper";
    } else if (style.contains("Scissors")) {
      userChoice = "Scissors";
    }

    winner(pcChoice, userChoice); // Wybierany jest zwyziezca,naliczane punkty,i rundy
    round(pcScore, userScore);
  });
});

// wybierany jest zwyciezca i punkty
let pcScore = 0;
let userScore = 0;
const pole = document.querySelector(".result");
let runda = 0;

function winner(pcChoice, userChoice) {
  if (pcChoice == "Rock" && userChoice == "Scissors") {
    pcScore++;
    pole.innerText = `przegrywasz!! 
          wynik Komputera: ${pcScore}
            twoj wynik: ${userScore}
            Runda: ${runda}`;
  } else if (pcChoice == "Paper" && userChoice == "Rock") {
    pcScore++;
    pole.innerText = `przegrywasz!! 
          wynik Komputera: ${pcScore}
            twoj wynik: ${userScore}
            Runda: ${runda}`;
  } else if (pcChoice == userChoice) {
    pcScore++;
    userScore++;
    pole.innerText = `remis!! 
          wynik Komputera: ${pcScore}
            twoj wynik: ${userScore}
            Runda: ${runda}`;
  } else {
    userScore++;
    pole.innerText = `Wygrywasz!! 
          wynik Komputera: ${pcScore}
            twoj wynik: ${userScore}
            Runda: ${runda}`;
  }
  runda++;
}
// Rundy zwyciezca
const poleW = document.querySelector(".winner");

function round(pcScore, userScore) {
  if (pcScore == 5) {
    poleW.innerText = "Przegrales Gre komputer ma 5 punktow";
  } else if (userScore == 5) {
    poleW.innerText = "Wygrales gre masz 5 punktow";
  }
}
