let choices = document.querySelectorAll(".choice");
let playBtn = document.querySelector(".play-btn button");
let userScore = 0;
let compScore = 0;

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
    
});
const gameDraw = () => {
    playBtn.innerText = "Game Draw";
    playBtn.style.backgroundColor = "#023047";
}

const showWinner = (userWin,userchoice, compChoice) => {
    if(userWin){
        playBtn.innerText = `You win! ${userchoice} beats ${compChoice}`;
        playBtn.style.backgroundColor = "#008000";
        userScore++;
        document.querySelector("#user-score").innerHTML = userScore;
        
    }
    else{
        playBtn.innerText = `You lose! ${compChoice} beats ${userchoice}`;
        playBtn.style.backgroundColor = "#bf0603";
        compScore++;
        document.querySelector("#comp-score").innerHTML = compScore;
    }
}


const playGame = (userchoice) => {
    const compChoice = genChoice();

    if(userchoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;

        if(userchoice === "Rock"){
            // paper scissor
            userWin = compChoice === "Paper" ? false : true
        }

        else if(userchoice === "Paper"){
            // rock scissor
            userWin = compChoice === "Rock" ? true : false
        }
        else{ //scissor
            
            // rock paper
            userWin = compChoice === "Rock" ? false : true
        }
        showWinner(userWin,userchoice,compChoice);
    }

}
const genChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
