let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let autoPlaying = false;
let intervalId;

function autoPlay(){
    if(!autoPlaying){
        let btnName = document.querySelector('.auto-btn');
        btnName.innerHTML = 'Stop Play';
        intervalId = setInterval( () => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 500);
        autoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        autoPlaying = false;
        let btnName = document.querySelector('.auto-btn');
        btnName.innerHTML = 'Auto Play';
    }
}

document.querySelector('.js-btn1').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-btn2').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-btn3').addEventListener('click', () => {
    playGame('scissors');
});

document.body.addEventListener('keydown', (e) => {
    if(e.key === 'r'){
        playGame('rock');
    }else if(e.key === 'p'){
        playGame('paper');
    }else if(e.key === 's'){
        playGame('scissors');
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You - <img src="Images/${playerMove}-emoji (1).png" class="move-img"> : <img src="Images/${computerMove}-emoji (1).png" class="move-img"> - Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}