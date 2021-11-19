let tabMotClassic = ["aléatoire", "gravier", "animal", "secteur", "étoile", "combien", "comment", "pourquoi", "yahourt", "chatouiller", "impressionner", "imprimer", "habiller", "factoriser", "simplifier", "décomposer", "joyeux", "wagon", "vagabond", "arctique", "crayon", "stylo", "feutre", "taille-crayon", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "découpage", "pliage", "pli", "colle", "affaire", "boîte", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "dé", "domino", "puzzle", "cube", "perle", "chose", "carré", "rond", "pâte à modeler", "tampon", "livre", "histoire", "bibliothèque", "image", "album", "titre", "bande dessinée", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "étiquette", "affiche", "alphabet", "appareil", "caméscope", "cassette", "cédé", "cédérom", "chaîne", "chanson", "chiffre", "contraire", "différence", "doigt", "écran", "écriture", "film", "fois", "idée", "instrument", "intrus", "lettre", "liste", "magnétoscope", "main", "micro", "modèle", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prénom", "question", "radio", "sens", "tambour", "télécommande", "téléphone", "télévision", "trait", "trompette", "voix", "xylophone", "zéro", "à côté", "à droite", "à gauche", "au milieu", "au-delà", "au-dessous", "au-dessus", "debout", "dedans", "dehors", "en bas", "en face", "en haut", "loin", "près", "tard", "tôt", "zigzag", "hélicoptère", "camionette", "semi-remorque", "poids lourd", "abîmé", "troisième", "tertiaire", "spectaculaire", "incendie", "eau", "fumée", "smartphone", "portable", "à l'aise", "chance", "pizza", "orthophoniste", "orthographe", "araignée", "chimpanzé", "antarctique", "accueil", "reblochon", "camembert", "trottinette", "atterrir", "coccyx", "parallèle", "paragraphe", "perpendiculaire", "notamment", "appeler", "appel", "méditerranée", "intéressant", "coordonner", "à fortiori", "dilemme", "pyrénées", "succint", "succintement", "empathie", "émotion", "répartie", "zèbre", "autochtone", "automatique", "amélioration", "atmosphère", "atmosphérique", "nuage", "nuance", "prospérité", "proposition", "perplexe", "péremptoire", "questionnaire", "surveillance", "particularité", "similitude", "ressemblance", "appartenance", "appartement", "onomatopées", "malversations", "avertissement", "klaxon", "dispositif", "ampoule", "foudroyant", "improbable", "pertinent", "feuilleton", "métaphore", "amplitude", "hexagonale", "perroquet", "charismatique", "aiguë", "paranoïa", "stoïque", "faïence", "absentéisme", "homogénéiser", "simultanéité", "probabilité", "interprète", "assèchement", "belvédère", "secret", "dérèglement", "prélèvement", "phénomène", "géométrique", "ténèbreux", "succès", "réglementation", "répréhensible", "irrémédiable", "musée", "événement", "archaïque", "adéquation"];
console.log(tabMotClassic.length);
let goodWordScore = 0;
let goodCaractScore = 0;
let randomWord;
let deletedCaractScore = 0;
let winScore = 100;


generateWord();
generateWordScore(winScore, 0);

function listener(){
    let input = document.getElementById('text-input');
    input.addEventListener("input", checkInputText);
}

function generateWordScore(scoreTotal, scoreRestant){
    let scoreDivTotal = document.getElementById('mots-gagnants');
    let scoreDivRestant = document.getElementById('mots-restants');
    scoreDivTotal.innerHTML = scoreTotal;
    if(goodWordScore == scoreTotal){
        winGame();
    }
    scoreDivRestant.innerHTML = scoreRestant;
}

function generateWord(){
    let divMots = document.getElementById('mots-a-saisir');
    divMots.classList.add('pre-animation');
    let randomGeneratedWord = tabMotClassic[Math.floor(Math.random() * tabMotClassic.length)];

    setTimeout(function(){
        divMots.classList.remove('pre-animation')
        divMots.innerHTML = randomGeneratedWord;
    },200)
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
                deletedCaractScore++;
                input.removeEventListener('keydown', startKeyListener);
            }
        }
    }
    analyseLengthText(inputValue);
}


function analyseLengthText(inputValue){
    if(inputValue.length == randomWord.length){
        analyseCorrectWord(inputValue);
    }
}

function analyseCorrectWord(inputValue){
    if(inputValue == randomWord){
        goodWordScore++;
        winWord();
    }
}

function winWord(){
    if(goodWordScore !== winScore){
        generateWord();
    }
    clearWord();
    generateWordScore(winScore, goodWordScore);
    showScore(goodWordScore, goodCaractScore, deletedCaractScore);
}

function clearWord(){
    let input = document.getElementById('text-input');
    input.value = '';
    input.placeholder = '';
}

function showScore(goodWordScore, goodCaractScore){
    let correctWordsProgressScore = document.getElementById('word-correct-score');
    let correctCaractsScore = document.getElementById('caract-good-score');
    let deletedCaractersScore = document.getElementById('caract-bad-score');
    deletedCaractersScore.innerHTML = deletedCaractScore;
    deletedCaractersScore.style.color = "red";
    correctWordsProgressScore.innerHTML = goodWordScore;
    correctWordsProgressScore.style.color = "green";
    correctCaractsScore.style.color = "green";
    correctCaractsScore.innerHTML = goodCaractScore;
}

function winGame(){
    let input = document.getElementById('text-input');
    let divMots = document.getElementById('mots-a-saisir');
    let scoreDiv = document.getElementById('score');
    divMots.style.fontSize = '25px';
    input.disabled = true;
    divMots.innerHTML = "▶ Bravo ! Vous avez bien travaillé ◀";
    let bodyLastChild = document.querySelector('body');
    let scriptAnimation = document.createElement('script');
    scriptAnimation.src = "./animation.js";
    bodyLastChild.appendChild(scriptAnimation);
    let btnReplay = document.createElement('button');
    btnReplay.innerHTML = "Recommencer";
    btnReplay.id = "btn-replay";
    btnReplay.setAttribute('onclick', 'window.location.reload()');
    scoreDiv.appendChild(btnReplay);
}

listener();