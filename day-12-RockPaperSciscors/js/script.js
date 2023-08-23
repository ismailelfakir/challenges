//console.log("3: External Script");
//-------- function getComputerChoice
const P = "Paper";
const S = "Scissors";
const R = "Rock";

function getComputerChoice() 
{
    const choices = [R, P, S];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) {
            return 1;  // Tie
        }
        if ((computerSelection === P && playerSelection === R) || 
            (computerSelection === S && playerSelection === P)) {
            return 2;  // Computer wins
        }
        if ((computerSelection === R && playerSelection === P) || 
            (computerSelection === P && playerSelection === S)) {
            return 3;  // Player wins
        }
}

// game of 5 rounds 

let scoreComputer = 0;
let scorePlayer = 0;
for(let i = 0; i < 5 ; i++)
{
    let computerChoice = getComputerChoice();
    let playerChoice = "Rock";

    console.log("computer: "+computerChoice+" | player: "+playerChoice);

    let result = playRound(playerChoice,computerChoice);
    
    if(result === 3) 
    {
        scorePlayer++ ; 
    }
    else if(result === 2) 
    {
        scoreComputer++ ;
    }
}

console.log("Computer's score:", scoreComputer);
console.log("Player's score:", scorePlayer);
if(scoreComputer > scorePlayer) console.log("You LOSE!!");
else if(scoreComputer < scorePlayer) console.log("You Win!!");
else console.log("NO ONE WIN!");

