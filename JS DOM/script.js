// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='Hooray..'

let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

// document.querySelector('.number').textContent=secretNumber;
document.querySelector('.check').addEventListener('click', function(){
    //converting the input string into int
    const guess = Number(document.querySelector('.guess').value);
    //if button is clicked and there is no input
    if(!guess){
        displayMessage('No input⛔');
    }
    //when player guesses right
   else  if(guess===secretNumber){
        displayMessage('Correct Number🎊');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        //high score for the player
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    //if guess is greater than the secret number
    else if( guess > secretNumber){
        if(score > 0){
            displayMessage('Too high📈');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            displayMessage('You have lost the game!!💥')
        }
       
    }
    //if guess is less than secret number
    else if (guess < secretNumber){
        if(score > 0){
            displayMessage('Too low📉');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('You have lost the game!!💥')
        }
       
    }

});
document.querySelector('.again').addEventListener('click', function(){
   secretNumber = Math.trunc(Math.random()*20)+1;
   score = 20;
   displayMessage('Start guessing...');
   document.querySelector('.score').textContent=score;
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor='#222';
});


//Had fun making this hahahahahahhhahaahha
//***************have fun while playing as well  */