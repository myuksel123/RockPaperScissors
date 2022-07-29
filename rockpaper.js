let choice = document.querySelector('button');
let button = document.querySelector('button');
button.addEventListener('click',onClick);

function onClick(){
document.getElementById("result").innerHTML ="you win";
}
function getcomputerChoice(){
    let compchoice = Math.floor(Math.random()*3);
return compchoice;
}
function playRound(compChoice, playerChoice){
    compChoice =getcomputerChoice();
    if(compChoice ==playerChoice){
        return("Its a tie!");
    }
    else if(compChoice==0 && playerChoice ==1){
        return("You Win! Paper beats rock. >:^)");
    }
    else if(compChoice ==0 && playerChoice ==2){
        return("Loss.... Rocks beats scissors >:^(");
    }
    else if(compChoice ==1 && playerChoice ==0){
        return("A terrible loss... Paper beats Rock :,(");
    }
    else if(compChoice ==1 && playerChoice ==2){
        return("A grand WIN! Scissors beats Paper :D");
    }
    else if(compChoice ==2 && playerChoice ==0){
        return("NICE! Rock beats Scissors :)");
    }
    else{
        return("Pity :( Scissors cuts paper");
    }
}
function game(){
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
        console.log(playRound(comp,playerchose));
        }
    }
}
