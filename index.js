// Hello 

// Timer
function timer(){
    var sec = 10;
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// Variables

const blankWord = document.getElementById('word');
const start = document.getElementById('startBtn');

// Score 
let wins = 0;
let loses = 0;

const words = ['Javascript', 'HTML', 'CSS', 'Boolean', 'Attributes', 'Functions']


start.addEventListener("click", startGame)


startGame() {
  console.log('this works great')
}
