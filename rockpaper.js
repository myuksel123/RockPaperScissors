
let playerscore=0;
let computerscore=0;

const container = document.querySelector('#container');

let results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

let scorekeeper = document.createElement('h2');
scorekeeper.classList.add('scorekeeper');
container.appendChild(scorekeeper);

gamestart();

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
playRound(button.id);
    },false);
});




function getcomputerChoice(){
    let compchoice = Math.floor(Math.random()*3);
return compchoice;
}

function playRound(playerChoice){
    if(computerscore ==5 || playerscore ==5){
        gamestart();
    }
    compChoice =getcomputerChoice();
    let result;
    if(compChoice ==playerChoice){
        result ="Its a tie!";
    }
    else if(compChoice==0 && playerChoice ==1){
        result="You Win! Paper beats rock. >:^)";
        ++playerscore;
    }
    else if(compChoice ==0 && playerChoice ==2){
        result="Loss.... Rocks beats scissors >:^(";
        ++computerscore;
    }
    else if(compChoice ==1 && playerChoice ==0){
        result="A terrible loss... Paper beats Rock :,(";
        ++computerscore;
    }
    else if(compChoice ==1 && playerChoice ==2){
        result="A grand WIN! Scissors beats Paper :D";
        ++playerscore;
    }
    else if(compChoice ==2 && playerChoice ==0){
        result="NICE! Rock beats Scissors :)";
        ++playerscore;
    }
    else if(compChoice ==2 && playerChoice ==1){
        result="Pity :( Scissors cuts paper";
        ++computerscore;
    }
    scorekeeper.textContent = `Your Score: ` + playerscore +
    `   Computer Score: ` + computerscore;
    results.textContent = result;
    if(computerscore==5 || playerscore ==5 ){
        gameend();
    }
    return result;
}

function gamestart(){
    playerscore=0;
    computerscore=0;
    results.textContent = "Let the game BEGIN! Choose a button";
    scorekeeper.textContent = `Your Score: ` + playerscore +
    `   Computer Score: ` + computerscore;
    }

function gameend(){
    if(computerscore >playerscore){
        results.textContent = "You losee!! \Choose a button if you want redemption";
    }
    else{
        results.textContent = "You win!!\n Choose a button if you wan to win again ;)";
    }
}