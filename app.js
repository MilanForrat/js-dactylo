let tabMotClassic = ["aléatoire", "gravier", "animal", "secteur", "étoile", "combien", "comment", "pourquoi", "yahourt", "chatouiller", "impressioner", "imprimer", "habiller", "factoriser", "simplifier", "décomposer", "joyeux", "wagon", "vagabond", "arctique"];
let goodWordScore = 0;
let goodCaractScore = -1;
let randomWord;
let deletedCaractScore = 0;

generateWord();

function listener(){
    let input = document.getElementById('text-input');
    input.addEventListener("input", checkInputText);
}

function generateWord(){
    let divMots = document.getElementById('mots-a-saisir');
    let randomGeneratedWord = tabMotClassic[Math.floor(Math.random() * tabMotClassic.length)];
    console.log(randomGeneratedWord);
    divMots.innerHTML = randomGeneratedWord;
    randomWord = randomGeneratedWord;
    return randomWord;
}

function checkInputText(){
    let input = document.getElementById('text-input');
    let inputValue = input.value;
    let regexOnlyLetters = /^[A-zÀ-ú]+$/;

    for(let i = 0; i < randomWord.length; i++){
        if(inputValue == randomWord){
            input.style.color = "green";
            goodCaractScore++;
            console.log(goodCaractScore);
        }
        else if(inputValue == " " || !inputValue.match(regexOnlyLetters)){
            input.style.color = "red";
        }
        else{
            input.style.color = "orange";
        }
    }
    if(inputValue.length > 0){
        input.addEventListener('keydown', startKeyListener);
        let duplicateDeletedScore = deletedCaractScore;
        function startKeyListener(){
            var key = event.keyCode || event.charCode;
            if(key === 8 && deletedCaractScore-duplicateDeletedScore == 0){
                console.log("avant : ",deletedCaractScore);
                deletedCaractScore++;
                console.log("après : ",deletedCaractScore);
                input.removeEventListener('keydown', startKeyListener);
            }
        }
    }
    

    console.log(deletedCaractScore, " en dehors fonction");
    analyseLengthText(inputValue);
}


function analyseLengthText(inputValue){
    console.log("function next: ", deletedCaractScore);
    if(inputValue.length == randomWord.length){
        analyseCorrectWord(inputValue);
    }
}

function analyseCorrectWord(inputValue){
    if(inputValue == randomWord){
        console.log("bravo");
        goodWordScore++;
        winWord();
    }
}

function winWord(){
    generateWord();
    clearWord();
    showScore(goodWordScore, goodCaractScore, deletedCaractScore);
}

function clearWord(){
    let input = document.getElementById('text-input');
    input.value = '';
}

function showScore(goodWordScore, goodCaractScore){
    let correctWordsProgressBar = document.getElementById('progress-word-bar');
    let correctCaractsProgressBar = document.getElementById('progress-caract-bar');
    correctWordsProgressBar.attributes[1].value = goodWordScore;
    correctCaractsProgressBar.innerHTML = goodCaractScore;
}

function showBadScore(deletedCaractScore){
    console.log(deletedCaractScore);
}

listener();