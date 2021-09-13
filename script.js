let option = 0
//Rock = 1; Papper = 2; Scissors = 3;
let playerSelection = 0 
let playerScore = 0
let computerScore = 0
let displayScore = document.getElementById('selections')
let displayPlayer = document.getElementsByClassName('player')
let displayComputer = document.getElementsByClassName('computer')
let button = document.getElementsByClassName('btn')
let img = document.getElementsByClassName('img')
let playerAns = 0 
let computerSelection = 0 
let message = ''
//audio variables
let winGameAudio = document.getElementById('winGameAudio')
let loseGameAudio = document.getElementById('loseGameAudio')
let clickAudio = document.getElementById('clickAudio')
//modal menu variables
let modal = document.getElementsByClassName('play-again')
let restartbtn = document.getElementsByClassName('restart')
//Computer selection 
function computerPlay(){
    option = Math.floor((Math.random() *3) + 1)
    if(option === 1){
        return 'Rock'
    }else if (option === 2){
        return 'Papper'
    }else if (option === 3) {
        return 'Scissors'
    }
}


//Player selection 
function playerPlay(){
    if (playerOption === 0){
        return 'rock'
    }else if(playerOption === 1){
        return 'papper'
    }else if(playerOption === 2){
        return "scissors"
    }
}
 
img[0].addEventListener('click', addPapper)
img[1].addEventListener('click', addRock)
img[2].addEventListener('click', addScissors)

img[0].addEventListener('click', playRound)
img[1].addEventListener('click', playRound)
img[2].addEventListener('click', playRound)

function playClickAudio(){
    clickAudio.play()
}

// plays a complete round
function playRound(){
    if (computerScore === 5 || playerScore === 5){ 
        replay()
    }else {
        computerSelection = computerPlay()
        playerSelection = playerPlay()
        playClickAudio()
        //removes the class from the computer selection
        img[0].classList.remove('selected1')
        img[1].classList.remove('selected1')
        img[2].classList.remove('selected1')
        //removes the class from the player selection
        img[0].classList.remove('selected')
        img[1].classList.remove('selected')
        img[2].classList.remove('selected')
        //selected2 is used for the conflicts
        img[0].classList.remove('selected2')
        img[1].classList.remove('selected2')
        img[2].classList.remove('selected2')
    if (computerSelection==='Rock') {
        img[1].classList.add('selected1')
        if(playerSelection ==='rock'){
            img[1].classList.add('selected2')
            message = 'Draw game!</br>'
        }
        else if(playerSelection==='papper'){
            img[0].classList.add('selected')
            message = 'Congratulations! You made a point</br>'
            playerScore += 1
        }
        else if (playerSelection==='scissors'){
            img[2].classList.add('selected')
            message = 'Sorry, you were smashed</br>'
            computerScore += 1
        }
    }

    else if (computerSelection=='Papper') {
        img[0].classList.add('selected1')
        if(playerSelection ==='rock'){
            img[1].classList.add('selected')
            message = 'Sorry, you were crapped</br>'
            computerScore += 1
        }
        else if(playerSelection==='papper'){
            img[0].classList.add('selected2')
            message = 'It\'s a tie</br>'
        }
        else if (playerSelection==='scissors'){
            img[2].classList.add('selected')
            message = 'Oh you ripped them!</br>'
            playerScore += 1
        }
    }
    
    else if (computerSelection=='Scissors') {
        img[2].classList.add('selected1')
        if(playerSelection ==='rock'){
            img[1].classList.add('selected')
            message = 'You smashed them!</br>'
            playerScore += 1
        }
        else if(playerSelection==='papper'){
            img[0].classList.add('selected')
            message = 'You were ripped like a piece of kale</br>'
            computerScore += 1
        }
        else if (playerSelection==='scissors'){
            img[2].classList.add('selected2')
            message = 'It\'s a tie</br>'
        }
    }
    game()
    }   
}
var playerOption = -1
  
function addRock(){
    playerOption = 0
}
function addPapper(){
    playerOption = 1
}
function addScissors(){
    playerOption = 2
}

//Play another round
function replay(){
    modal[0].style.display = 'block'
    restartbtn[0].onclick = function(){
        computerScore = 0
        playerScore = 0
        modal[0].style.display ='none'
        game()
    }
}
//close the window by clicking outside the modal
window.onclick = function(e){
    if(e.target == modal[0]) {
        modal[0].style.display = 'none'
    }
}
//Display if the player lost or won
function endMessage(){
    if(computerScore === 5){
        displayScore.innerHTML = 'Sorry, you lost'
        loseGameAudio.play()
    }else if(playerScore === 5){
        displayScore.innerHTML = 'You won !!!'
        winGameAudio.play()
    }
}
//displays the scores and controls when to replay the game
function game(){ 
    displayScore.innerHTML = `${message}`
    displayPlayer[0].innerHTML = `Player = ${playerScore}`
    displayComputer[0].innerHTML = `Computer = ${computerScore}`
    endMessage()
    if (computerScore === 5 || playerScore === 5){ 
        replay()
    } 
    
}



