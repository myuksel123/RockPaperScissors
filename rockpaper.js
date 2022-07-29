let choice = document.querySelector('button');
let button = document.querySelector('button');
button.addEventListener('click',onClick);

function onClick(){
document.getElementById("result").innerHTML ="you win";
}
function computerChoice(){
    let compchoice = Math.floor(Math.random()*3);
    if (compchoice ==0){
        console.log("Rock");
    }
    else if(compchoice ==1){
        console.log("Paper");
    }
    else{
        console.log("Scissors");
    }
return compchoice;
}
function playRound(playerChoice){
    let computerChoice =computerChoice();
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
