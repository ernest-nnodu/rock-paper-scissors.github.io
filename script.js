

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');
let playButton = document.querySelector('.play p');
let result = document.querySelector("h2");
let userBox = document.querySelector(".user");
let cpuBox = document.querySelector(".cpu");
let userMove = "";
let cpuMove = "";
let playButtonState = "play";

function rockClickEvent() {
    if(playButtonState === "play") {
        userBox.innerHTML = `<img src="images/fist.png" alt="">`;
        userMove = "rock";
    }
}

function rockMouseOverEvent() {
    if(playButtonState === "play") {
        rockButton.style.backgroundColor = "white";
        rockButton.style.color = "black";
    }
}

function rockMouseOutEvent() {
    if(playButtonState === "play") {
        rockButton.style.backgroundColor = "black";
        rockButton.style.color = "white";
    }
}

function paperClickEvent() {
    if(playButtonState === "play") {
        userBox.innerHTML = `<img src="images/hand-paper.png" alt="">`;
        userMove = "paper";
    }
}

function paperMouseOverEvent() {
    if(playButtonState === "play") {
        paperButton.style.backgroundColor = "white";
        paperButton.style.color = "black";
    }
}

function paperMouseOutEvent() {
    if(playButtonState === "play") {
        paperButton.style.backgroundColor = "black";
        paperButton.style.color = "white";
    }
}

function scissorsClickEvent() {
    if(playButtonState === "play") {
        userBox.innerHTML = `<img src="images/scissor.png" alt="">`;
        userMove = "scissors";
    }
}

function scissorsMouseOverEvent() {
    if(playButtonState === "play") {
        scissorsButton.style.backgroundColor = "white";
        scissorsButton.style.color = "black";
    }
}

function scissorsMouseOutEvent() {
    if(playButtonState === "play") {
        scissorsButton.style.backgroundColor = "black";
        scissorsButton.style.color = "white";
    }
}

function playButtonClickEvent() {
    if(playButtonState === "play") {
        playGame();
    } else {
        reset();
    }
}

function playButtonMouseOverEvent() {
    document.querySelector(".play p").style.backgroundColor = "green";
}

function playButtonMouseOutEvent() {
    document.querySelector(".play p").style.backgroundColor = "black";
}

function generateCpuMove() {
    let move = Math.floor((Math.random() * 3) + 1);

    switch(move) {
        case 1:
            document.querySelector(".cpu").innerHTML = `<img src="images/fist.png" alt="">`;
            return "rock";
        case 2:
            document.querySelector(".cpu").innerHTML = `<img src="images/hand-paper.png" alt="">`;
            return "paper";
        case 3:
            document.querySelector(".cpu").innerHTML = `<img src="images/scissor.png" alt="">`;
            return "scissors";
    }
}

function calculateWinner() {

    let winner = "";

    if(userMove === "rock" && cpuMove === "scissors") {
        winner = "User Wins!!!";
    } else if (userMove === "paper" && cpuMove === "rock") {
        winner = "User Wins!!!";
    } else if(userMove === "scissors" && cpuMove == "paper") {
        winner = "User Wins!!!";
    } else if(userMove === "rock" && cpuMove === "paper") {
        winner = "Cpu Wins!";
    } else if(userMove === "paper" && cpuMove === "scissors") {
        winner = "Cpu Wins!";
    } else if(userMove === "scissors" && cpuMove === "rock") {
        winner = "Cpu Wins!";
    } else {
        winner = "It's a draw";
    }

    return winner;
}

function playGame() {
    if(userMove !== "") {
        cpuMove = generateCpuMove();
        document.querySelector("h2").innerHTML = calculateWinner();
        document.querySelector("h2").style.visibility = "visible";
        playButton.textContent = "Reset";
        playButtonState = "reset";
    }
}

function reset() {
    playButton.textContent = "Play";
    userBox.innerHTML = "";
    cpuBox.innerHTML = "";
    userMove = "";
    cpuMove = "";
    result.style.visibility = "hidden";
    playButtonState = "play";
}

rockButton.addEventListener('click', rockClickEvent);
rockButton.addEventListener('mouseover', rockMouseOverEvent);
rockButton.addEventListener('mouseout', rockMouseOutEvent);

paperButton.addEventListener('click', paperClickEvent);
paperButton.addEventListener('mouseover', paperMouseOverEvent);
paperButton.addEventListener('mouseout', paperMouseOutEvent);

scissorsButton.addEventListener('click', scissorsClickEvent);
scissorsButton.addEventListener('mouseover', scissorsMouseOverEvent);
scissorsButton.addEventListener('mouseout', scissorsMouseOutEvent);

playButton.addEventListener('click', playButtonClickEvent);
playButton.addEventListener('mouseover', playButtonMouseOverEvent);
playButton.addEventListener('mouseout', playButtonMouseOutEvent);