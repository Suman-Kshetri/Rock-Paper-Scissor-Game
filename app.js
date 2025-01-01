let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".image");
const msg = document.querySelector(".msg");
const userScoreNumber = document.querySelector("#user-score");
const CompuerScoreNumber = document.querySelector("#computer-score");

//generating the random index of array using the Math function
const genComputerChoice = () => {
  let choice = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
};

//both user choice and computer random values are cheked to find the winner among them
const playGame = (userChoice) => {
  console.log("user = ", userChoice);
  //generating computer choice
  const computerChoice = genComputerChoice();
  console.log("computer = ", computerChoice);

  if (userChoice == computerChoice) {
    msg.innerText = "Game Was Draw. Play Again!!";
    msg.style.color = "#666";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice ,computerChoice);
  }
};

//displaying winner according to the condition in above function and updating score of user and the compouter based on the winner
const showWinner = (userWin,userChoice,computerChoice) => {
  if (userWin) {
    userScore++;
    userScoreNumber.innerText = userScore;
    msg.innerText = `You Win!! ${userChoice} beats ${computerChoice}`;
    msg.style.color = "Green";
  } else {
    computerScore++;
    CompuerScoreNumber.innerText =computerScore;
    msg.innerText = `You Loose!! ${computerChoice} beats ${userChoice}`;
    msg.style.color = "Red";
  }
};
//accessing all the image div and their unique index 
choices.forEach((choice) => {
  // console.log(choice);
  let userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    console.log("CHOICE WAS CLICKED");
    playGame(userChoice);
  });
});
