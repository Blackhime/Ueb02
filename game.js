var kings = ['1F0AE', '1F0BE', '1F0CE', '1F0DE'];
var queens = ['1F0AD', '1F0BD', '1F0CD', '1F0DD'];
var jacks = ['1F0AB', '1F0BB', '1F0CB', '1F0DB'];

var defaultSumme = 100;
var stake = 0;
var kingCard = "";
var queenCard = "";
var jackCard = "";



function initialisation() {

    document.getElementById("stake").value = 0;
    document.getElementById("currentSumme").value = defaultSumme;
    document.getElementById("cardFieldOne").value = "";
    document.getElementById("cardFielsTwo").value = "";
    document.getElementById("cardFielsThree").value = "";
    
}

function showCards() {
    
    document.getElementById("cardFieldOne").value = kingCard;
    document.getElementById("cardFieldTwo").value = queenCard;
    document.getElementById("cardFieldThree").value = jackCard;
    
}

function winOrLoose() {
    
    var multiplicator; 
    
    if (kingCard[3] == queenCard[3] && jackCard == queenCard[3]) {
        alert("Stake multiplicated by 2");
        multiplicator = 2;
    }
    
    else if((kingCard == A || kingCard == D) && (queenCard == A || jackCard == D) && (jackCard == A || jackCard == D)) {
        alert("Stake restituted");
        multiplicator == 1;
    }
    
    else if((kingCard == B || kingCard == C) && (queenCard == B || jackCard == C) && (jackCard === B || jackCard == C)) {
        alert("Stake restituted");
        multiplicator == 1;
    }
    
    else {
        alert("You loose you stake");
        multiplicator = 0;
    }
}


function game(stake) {
    var currentStake = document.getElementById("stake").value;
    var currentSumme = document.getElementById("currentSumme").value;
    
    if(currentSumme == 0){
        alert("Sorry, you loose !");
        initialisation();
    }

    if(stake <= currentSumme){
        currentSumme = currentSumme - stake;
        
        permute();
        
        showCards();
        
        var multiplicator = WinOrLoose();
        currentSumme = currentSumme + (stake * multiplicator);
    }
    else {
        alert("Not enough money !");
    }

}

function restart() {

    initialisation();

}

function permute() {
    
    for (var i = 0 ; i < kings.length - 1 ; i++){

        var j = Math.floor(Math.random()*(i+1));
        var temp = kings[i]
        kings[i] = kings[j];
        kings[j] = kings[i];
        
    } 
    
    for (var i = 0 ; i < queens.length - 1 ; i++){

        var j = Math.floor(Math.random()*(i+1));
        var temp = queens[i]
        queens[i] = queens[j];
        queens[j] = queens[i];
        
    } 
    
    for (var i = 0 ; i < jacks.length - 1 ; i++){

        var j = Math.floor(Math.random()*(i+1));
        var temp = jacks[i]
        jacks[i] = jacks[j];
        jacks[j] = jacks[i];
        
    } 
    
    kingCard = kings[0];
    queenCard = queens[0];
    jackCard = jacks[0];

}
