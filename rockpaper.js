
let playerscore=0;
let computerscore=0;


const container = document.querySelector('#container');
let results = document.createElement('div');
results.classList.add('results');


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
    results.textContent = result;
    container.appendChild(results);
    console.log(result);
    return result;
}
function game(){
    playerscore=0;
    computerscore=0;
    console.log("Let the game BEGIN!");
        let comp = getcomputerChoice();
        let player = prompt("What's your pick? Rock, Paper, or Scissors");
        let playerchose;
        if(player.toLowerCase() == "rock"){
            playerchose=0;
        }
        else if(player.toLowerCase() == "paper"){
            playerchose=1;
        }
        else if(player.toLowerCase() == "scissors"){
            playerchose=2;
        }
        else{
            playerchose =3;
        }
        if(playerchose==3){
            console.log("im sorry, that's an invalid answer");
            i--;
        }
        else{
        let statement = playRound(comp,playerchose);
        console.log(statement);
        if(statement == "Its a tie!"){
            i--;
        }
    }
}
