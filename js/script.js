
const btn = document.querySelector('button');
btn.addEventListener('click', changeText);

const nameInput = document.querySelector('#nameInput');

function changeText(event) {
    event.preventDefault();
    //Ändra h1-texten till användarens namn
    
    const h1 = document.querySelector('#name');
    // h1.innerText = nameInput.value;
    
}



let userGuess = 0;
let compGuess = 0;
let computerScore = 0;
let userScore = 0;
let rock = 1;
let paper = 2;
let scissor = 3;

const button1 = document.querySelector('#sten-user');
const button2 = document.querySelector('#sax-user');
const button3 = document.querySelector('#pase-user');
const button5 = document.querySelector('#play');

button1.addEventListener('click', handleGuess);
button2.addEventListener('click', handleGuess);
button3.addEventListener('click', handleGuess);
button5.addEventListener('click', play);


const h2ComputerChoice = document.querySelector('#computerChoice');
const h2UserChoice = document.querySelector('#userChoice');
//Hämtar elementet som anvnds för att visa poängen
const h2ComputerScore = document.querySelector('#computerScore');
h2ComputerScore.innerText = '0';

const h2UserScore = document.querySelector('#userScore');
h2UserScore.innerText = '0';


function play(event){
    event.preventDefault();

    const h2 = document.querySelector('#player');
    h2.innerText = nameInput.value;
    
   }


function handleGuess(event) {
    // event.preventDefault();

    let compGuess = 1 + Math.floor(Math.random() * 3);
    console.log('Computer: ' + compGuess);

    //Innertext beror på numret som compGuess innehller 
    if (compGuess == 1) {
        h2ComputerChoice.innerText = 'Rock';
    }
    else if (compGuess == 2) {
        h2ComputerChoice.innerText = 'Paper';
    }
    else if (compGuess == 3) {
        h2ComputerChoice.innerText = ' Scissor';
    }

    if (event.target.id == 'sten-user') {
        userGuess = 1;
        h2UserChoice.innerText ='Rock';
    }
    else if (event.target.id == 'pase-user') {
        userGuess = 2;
        h2UserChoice.innerText = 'Paper';
    }
    else if (event.target.id == 'sax-user') {
        userGuess = 3;
        h2UserChoice.innerText = 'Scissor';
    }

    console.log(userGuess);

    //För att testa lösningen för att kolla vinnaren behöver du
    // Om event.target,innerText är lika med Sten ska userGuess vara lika med 1 osv
    console.log(event.target.innerText)


    //Kollar vem som vann
    //Uppdatar h2-score-elementen med poängen
    if (compGuess == rock && userGuess == scissor || compGuess == scissor && userGuess == paper || compGuess == paper && userGuess == rock) {
        computerScore++;
        h2ComputerScore.innerText =computerScore + ' points';
        h2UserScore.innerText =userScore + ' points';
    }
    else if (compGuess == scissor && userGuess == rock || compGuess == paper && userGuess == scissor || compGuess == rock && userGuess == paper) {
        userScore++;
        h2ComputerScore.innerText = computerScore + ' points';
        h2UserScore.innerText =userScore + ' points';
    }
    
    console.log(computerScore, userScore);

    setTimeout(function(){

        if (compGuess == userGuess) {
            h2ComputerScore.innerText = computerScore + ' points';
            h2UserScore.innerText =userScore + ' points';
            alert('Tie!');
        }
    },300)

    setTimeout(function(){
        if (computerScore == 3) {
            userScore = 0;
            computerScore = 0;
            alert('The computer won!');
            console.log('The computer won');
        }
        else if (userScore == 3) {
            userScore = 0;
            computerScore = 0;
            alert(nameInput.value + ' won!');
            // alert('Usern vann!');
            console.log(nameInput.value +'');
        }
    }, 200)

}



const button4 = document.querySelector('#re-start');
button4.addEventListener('click', restartGame);

function restartGame(event) {
    //tömmer allt
    h2ComputerScore.innerText = '0';
    h2UserScore.innerText = '0';
    h2UserChoice.innerText = '';
    h2ComputerChoice.innerText = '';
    nameInput.value = '';
} 
