let player;
let computer;

let paper = -1;
let scissor = 0;
let rock = 1;

document.getElementById("paper").onclick = function() {
    player = paper;
    gameLogic(player);
}

document.getElementById("scissor").onclick = function() {
    player = scissor;
    gameLogic(player);
}

document.getElementById("rock").onclick = function() {
    player = rock;
    gameLogic(player);
}


function gameLogic(player) {
    computer = Math.floor(Math.random() * 3) - 1;

    var temp;
    var x = document.getElementById("result");
    
    if(computer == -1)
    temp = 'Paper';
    else if(computer == 0)
    temp = 'Scissor';
    else
    temp = 'Rock';
        
    if(player == computer)
    {
        x.innerHTML = "Computer choosed " + temp + " DRAW! ('_')";
    }
    else
    {
        if(player < computer && player * computer == 0)
            x.innerHTML = "Computer choosed " + temp + " YOU LOSE! :(:(:(";
        else if(player > computer && player + computer == 0)
            x.innerHTML = "Computer choosed " + temp + " YOU LOSE! :(:(:(";
        else
            x.innerHTML = "Computer choosed " + temp + " YOU WIN! :):);)";
    }
}




