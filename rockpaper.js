
let playerscore=0;
let computerscore=0;

let choice = document.querySelector('button')
let button = document.querySelector('button')
button.addEventListener('click',onClick)


function onClick(){
document.getElementById("result").innerHTML ="you win";
}
function getcomputerChoice(){
    let compchoice = Math.floor(Math.random()*3);
return compchoice;
}
function playRound(compChoice, playerChoice){
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
    else{
        result="Pity :( Scissors cuts paper";
        ++computerscore;
    }
    return result;
}
function game(){
    playerscore=0;
    computerscore=0;
    console.log("Let the game BEGIN!");
    for(let i=0; i<5; i++){
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
        console.log(`Your Score: ` + playerscore + `\n Computer Score: ` + computerscore);
        }
    }
}
