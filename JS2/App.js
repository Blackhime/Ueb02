var kings = ['K_Hearts','K_Clubs', 'K_Spades', 'K_Diamonds'];
var queens = ['Q_Hearts','Q_Clubs', 'Q_Spades', 'Q_Diamonds'];
var jacks = ['J_Hearts','J_Clubs', 'J_Spades', 'J_Diamonds'];

var kingCard = "K_Hearts";
var queenCard = "K-Hearts";
var jackCard = "K_Hearts";


function initialisation() {

    document.getElementById("stake").value = "";
    document.getElementById("currentSumme").value = defaultSumme;
    document.getElementById("cardFieldOne").value = "";
    document.getElementById("cardFieldTwo").value = "";
    document.getElementById("cardFieldThree").value = "";
    
}

function showCards() {
    
    document.getElementById("cardFieldOne").src = "Img/" + kingCard + ".png";
    document.getElementById("cardFieldTwo").src = "Img/" + queenCard + ".png";
    document.getElementById("cardFieldThree").src = "Img/" + jackCard + ".png";
    
}

function winOrLoose() {
    
    if (kingCard[3] == queenCard[3] && jackCard == queenCard[3]) {
        alert("Stake multiplicated by 2");
        return 2;
    }
    
    else if((kingCard[3] == 'H' || kingCard[3] == 'D') && (queenCard[3] == 'H' || queenCard[3] == 'D') && (jackCard [3]== 'H' || jackCard[3] == 'D')) {
        alert("Stake restituted");
        return 1;
    }
    
    else if((kingCard[3] == 'C' || kingCard[3] == 'S') && (queenCard[3] == 'C' || queenCard[3] == 'S') && (jackCard [3]== 'C' || jackCard[3] == 'S')) {
        alert("Stake restituted");
        return 1;
    }
    
    else{
        alert("You loose you stake");
        return 0;
    }
}


function game() {
    var stake = parseInt(document.getElementById("stake").value);
    var currentSumme = parseInt(document.getElementById("currentSumme").value);
    
    if(currentSumme == 0){
        alert("Sorry, you loose !");
        initialisation();
    }

    else if(stake <= currentSumme){
        currentSumme = currentSumme - stake;
        
        console.log(kings);
        kingCard = permute(kings)[0];
        console.log(kings);
        permute(queens);
        queenCard= queens[1];
        permute(jacks)
        jackCard = jacks[1];
        
        showCards();
        
        kingCard = kingCard.toCharArray();
        queenCard = queenCard.toCharArray();
        jackCard = jackCard.toCharArray();
        
        var multiplicator = winOrLoose();
        currentSumme = currentSumme + (stake * multiplicator);
    }
    else {
        alert("Not enough money !");
    }

}

function restart() {

    initialisation();

}


function main() {

    game();

}


function permute(array) {
    var copy = [], n = array.length, i;
    var copyArray = [];
    
    for(var i= 0; i < n;++i){
        copyArray[i] = array[i];
    }

    while (n) {

        i = Math.floor(Math.random() * n--);

        copy.push(copyArray.splice(i, 1)[0]);
    }

    return copy;
}
