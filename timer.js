let sec = 0;
let min = 0;
let hrs = 0;
let secEval = 5;
let t;
let active = false;
let evaluation = false;
let chronoHtml = document.getElementById('temps-chrono');
let input = document.getElementById('text-input');

input.addEventListener('input', ()=>{
    if(active == true){
        return;
    }
    else{
        generateTime();
    }
    if(evaluation == true){
        console.log("là");
        // useful secEval ?
        // secEval=5;
        generateEvalTimer();
    }
    active = true;
})

function updateTime(){
    sec++;
    if(sec>=60){
        min++;
        sec=0;
        if(min>=60){
            hrs++
            min=0;
        }
    }
}

function generateTime(){
    updateTime();
    showTime(hrs, min, sec);
    updateInterval();
    checkWin();
}

function showTime(hrs, min, sec){ 
    // check time if hours under nine then display 0 before number otherwise 
    chronoHtml.textContent = (hrs > 9 ? hrs : "0" + hrs)+ ":" + (min > 9 ? min : "0" + min)+ ":" + (sec > 9 ? sec : "0" + sec);
}

function updateInterval(){
    t = setTimeout(generateTime, 1000);
}

function checkWin(){
    let motsRestants = document.getElementById('mots-restants').textContent;
    let motsGagnants = document.getElementById('mots-gagnants').textContent;
    if(motsRestants == motsGagnants){
        clearTimeout(t);
        active=false;
    }
}

function decreaseTime(){
    secEval--;
}

function generateEvalTimer(){
    decreaseTime();
    showTime(0, 0, secEval);
    updateCountdownEval();
    checkEvalTimer();
}

function updateCountdownEval(){
    t = setTimeout(generateEvalTimer, 1000);
}

function checkEvalTimer(){
    if(secEval<=0){
        clearTimeout(t);
        evaluation=false;
        winGame();
      }
}