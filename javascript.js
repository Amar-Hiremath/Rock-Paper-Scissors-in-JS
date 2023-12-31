let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const displayUserScore = document.querySelector("#user-score");
const displayCompScore = document.querySelector("#comp-score");
const leftImg = document.querySelector("#leftImg");
const rightImg = document.querySelector("#rightImg");


rightImg.setAttribute("src" , "./images/rock right.jpg")

console.log(leftImg)
console.log(rightImg)
const drawGame = () => {
  msg.innerText = "DRAW!";  
  msgContainer.style.backgroundColor="yellow"
};

const genCompChoice = () => {
  //Rock/paper/scissors
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWinner) => {
  if (userWinner) {
    msg.innerText = "YOU WIN!";
    userScore++;
    displayUserScore.innerText = `${userScore}`;    
    msgContainer.style.backgroundColor="green"
  } else {
    msg.innerText = "YOU LOOSE!";
    compScore++;
    displayCompScore.innerText = `${compScore}`;    
    msgContainer.style.backgroundColor="red"
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();  
  console.log(compChoice);  
  if (userChoice === compChoice) {
    drawGame();    
    leftImg.setAttribute("src" , `./images/${userChoice} left.jpg`)
    rightImg.setAttribute("src" , `./images/${userChoice} right.jpg`)
  } else {
    let userWinner = true;
    if (userChoice === "rock") {   
      userWinner = compChoice === "paper" ? false : true;
      leftImg.setAttribute("src" , `./images/${userChoice} left.jpg`)   
      rightImg.setAttribute("src" , `./images/${compChoice} right.jpg`) 
    } else if (userChoice === "scissors") {
      userWinner = compChoice === "rock" ? false : true;
      leftImg.setAttribute("src" , `./images/${userChoice} left.jpg`)   
      rightImg.setAttribute("src" , `./images/${compChoice} right.jpg`) 
    } else if (userChoice === "paper") {
      userWinner = compChoice === "scissors" ? false : true;
      leftImg.setAttribute("src" , `./images/${userChoice} left.jpg`)   
      rightImg.setAttribute("src" , `./images/${compChoice} right.jpg`) 
    }
    return showWinner(userWinner);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
