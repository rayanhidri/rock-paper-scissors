const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Paper";
  } else return "Scissors";
  //console.log("Computer") ;
}
function CheckWinner(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Tie";
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection.toLowerCase() == "scissors") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection.toLowerCase() == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection.toLowerCase() == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
let playerScore = 0 ;
let computerScore = 0 ; 
 let score ;
function playRound(playerSelection, computerSelection) { 
    if (playerScore === 5) {
        const h2 = document.createElement("h2") ; 
        h2.innerText = "You won " + playerScore + " to " + computerScore + "!!" ;
        outcomeDiv.appendChild(h2) ;
        const button = document.createElement("button") 
        button.innerText = "Play again" ; 
        outcomeDiv.appendChild(button)
        button.addEventListener("click", () =>{
            location.reload();
        })
        playerScore++ ;
        
      }
    else if (computerScore === 5) {
        const h2 = document.createElement("h2") ; 
        h2.innerText = "You lost " + computerScore + " to " + playerScore + "!!" ;
        outcomeDiv.appendChild(h2) ; 
        const button = document.createElement("button") 
        button.innerText = "Play again" ; 
        outcomeDiv.appendChild(button)
        button.addEventListener("click", () =>{
            location.reload();
        })
        computerScore++ ;
        
      } 
      if (playerScore > 5 || computerScore > 5 ) {
        return ;
      }
  const result = CheckWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    const p = document.createElement("p");
    p.innerText = "You tied with the Computer!";
    outcomeDiv.appendChild(p);
    //return "It's a tie !";
  } else if (result == "Player") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText =
      "You win! " + playerSelection + " beats " + computerSelection + ".";
    outcomeDiv.appendChild(p);
    //return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    const p = document.createElement("p");
    p.innerText =
      "You lose! " + computerSelection + "  beats " + playerSelection + ".";
    outcomeDiv.appendChild(p);
    computerScore++;
    //return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  score = Math.max(playerScore,computerScore) ; 
}
rockButton.addEventListener("click", () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  paperButton.addEventListener("click", () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  scissorsButton.addEventListener("click", () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  

/*function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose your weapon !!");
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    if (CheckWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    } else if (CheckWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    alert("YOU  WON !");
  } else if (playerScore < computerScore) {
    alert("YOU LOST!");
  } else {
    alert("IT'S A TIE, PLAY AGAIN !");
  }
}*/
