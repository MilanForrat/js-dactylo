let sec = 0;
let min = 0;
let hrs = 0;
let t;
let active = false;
let chronoHtml = document.getElementById('temps-chrono');
let input = document.getElementById('text-input');

input.addEventListener('input', ()=>{
    
    if(active == true){
        return;
    }
    else{
        generateTime();
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
    // check time if hours under nine then display 0 before number otherwise 
    chronoHtml.textContent = (hrs > 9 ? hrs : "0" + hrs)+ ":" + (min > 9 ? min : "0" + min)+ ":" + (sec > 9 ? sec : "0" + sec);
    updateInterval();
    checkWin();
}

function updateInterval(){
    t = setTimeout(generateTime, 1000);
}

function checkWin(){
    let motsRestants = document.getElementById('mots-restants').textContent;
    let motsGagnants = document.getElementById('mots-gagnants').textContent;
    console.log(motsGagnants+" et "+motsRestants);

    if(motsRestants == motsGagnants){
        clearTimeout(t);
    }
}