let tabMotDifficile = ["xylophone", "zéro", "à côté", "à droite", "à gauche", "au milieu", "au-delà", "au-dessous", "au-dessus", "debout", "dedans", "dehors", "en bas", "en face", "en haut", "loin", "près", "tard", "tôt", "zigzag", "hélicoptère", "camionette", "semi-remorque", "poids lourd", "abîmé", "troisième", "tertiaire", "spectaculaire", "incendie", "eau", "fumée", "smartphone", "portable", "à l'aise", "chance", "pizza", "orthophoniste", "orthographe", "araignée", "chimpanzé", "antarctique", "accueil", "reblochon", "camembert", "trottinette", "atterrir", "coccyx", "parallèle", "paragraphe", "perpendiculaire", "notamment", "appeler", "appel", "méditerranée", "intéressant", "coordonner", "à fortiori", "dilemme", "pyrénées", "succint", "succintement", "empathie", "émotion", "répartie", "zèbre", "autochtone", "automatique", "amélioration", "atmosphère", "atmosphérique", "nuage", "nuance", "prospérité", "proposition", "perplexe", "péremptoire", "questionnaire", "surveillance", "particularité", "similitude", "ressemblance", "sceptique","acquiescer", "appartenance", "appartement", "onomatopées", "malversations", "avertissement", "klaxon", "dispositif", "ampoule", "foudroyant", "improbable", "pertinent", "feuilleton", "métaphore", "amplitude", "hexagonale", "perroquet", "charismatique", "aiguë", "paranoïa", "stoïque", "faïence", "absentéisme", "homogénéiser", "simultanéité", "probabilité", "interprète", "assèchement", "belvédère", "secret", "dérèglement", "prélèvement", "phénomène", "géométrique", "ténèbreux", "succès", "réglementation", "répréhensible", "irrémédiable", "musée", "événement", "réverbère", "archaïque", "adéquation", "cacahuète", "kayak", "canoë", "toboggan", "imperméable", "imperturbable", "accordéon", "sillonner","retrouvailles", "communauté", "calligraphe", "bienveillante", "boomerang","tignasse", "blizzard", "carapater", "inoxydable","s'emmitoufler"];
let tabMotFacile = ["dé", "facile", "bonjour", "difficle", "armoire", "grève", "halte", "utilisateur", "cartouche", "encre", "ordinateur", "simple", "charte", "quai", "banane", "barque", "poubelle", "mail", "enveloppe", "tarif", "même", "emploi", "gravier", "animal", "secteur", "étoile", "combien", "comment", "tampon", "livre", "histoire"];
let tabMotMoyen = ["week-end","parchemin","attirail", "horizon", "simplification", "assurance", "artichaud", "compagnon", "civil", "artificielle","en face", "en haut", "loin", "près", "tard", "tôt", "zigzag", "hélicoptère", "camionette", "semi-remorque", "aléatoire", "gravier", "animal", "secteur", "étoile", "combien", "comment", "pourquoi", "yahourt", "chatouiller", "impressionner", "imprimer", "habiller", "factoriser", "simplifier", "décomposer", "joyeux", "wagon", "vagabond", "arctique", "crayon", "stylo", "feutre", "taille-crayon", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "découpage", "pliage", "pli", "colle", "affaire", "boîte", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "dé", "domino", "puzzle", "cube", "perle", "chose", "carré", "rond", "pâte à modeler", "tampon", "livre", "histoire", "bibliothèque", "image", "album", "titre", "bande dessinée", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "étiquette", "affiche", "alphabet", "appareil", "caméscope", "cassette", "cédé", "cédérom", "chaîne", "chanson", "chiffre", "contraire", "différence", "doigt", "écran", "écriture", "film", "fois", "idée", "instrument", "intrus", "lettre", "liste", "magnétoscope", "main", "micro", "modèle", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prénom", "question", "radio", "sens", "tambour", "télécommande", "téléphone", "télévision", "trait", "trompette", "voix", "poids lourd", "abîmé", "troisième", "tertiaire", "spectaculaire", "incendie", "eau", "fumée", "smartphone", "portable", "à l'aise", "chance", "pizza", "orthophoniste", "orthographe", "araignée", "chimpanzé", "antarctique", "accueil", "reblochon", "camembert", "trottinette", "atterrir", "coccyx", "parallèle", "paragraphe", "perpendiculaire", "notamment", "appeler", "appel", "méditerranée", "intéressant", "coordonner", "à fortiori", "dilemme", "pyrénées", "succint", "succintement", "empathie", "émotion",]
let goodWordScore = 0;
let goodCaractScore = 0;
let randomWord;
let deletedCaractScore = 0;
let winScore = 100;
let tabConseils = ['Pensez à lever les yeux, ne regardez pas votre clavier.',"Le placement de vos doigts ne m'importe peu, tant que vous êtes efficace","Il faut s'entraîner tous les jours pour s'améliorer","La dactylo fait partie des soft-skills attendues par les employeurs",'La dactylo vous aide à taper plus vite et à faire moins de fautes de frappe'];
let tabMot= tabMotFacile;
let niveauDifficulte = document.getElementById('niveau-difficulte');
let titreTemps = document.getElementById('titre-temps');

generateWord(tabMot);
generateWordScore(winScore, 0);
instructions();
badgeNiveau();
choixEntrainement();

function badgeNiveau(){
    if(tabMot == tabMotFacile){
        niveauDifficulte.innerHTML="Facile";
        niveauDifficulte.style.backgroundColor = "green";
    }
    else if(tabMot == tabMotMoyen){
        niveauDifficulte.innerHTML="Moyen";
        niveauDifficulte.style.backgroundColor = "orange";
    }
    else if(tabMot == tabMotDifficile && evaluation == true){
        niveauDifficulte.innerHTML="Evaluation";
        niveauDifficulte.style.backgroundColor = "blue";
    }
    else{
        niveauDifficulte.innerHTML="Difficile";
        niveauDifficulte.style.backgroundColor = "red";
    }
}

function choixEntrainement(){
    let radios = document.forms["form-difficulty"].elements["difficulte"];
    for(element in radios) {
        if(radios[0].checked){
            console.log("facile");
            evaluation = false;
            tabMot = tabMotFacile;
            generateWord(tabMot);
            resetScore();
            resetInput();
            resetTimerTraining()
            badgeNiveau();
            titreTemps.innerHTML="Temps écoulé :";
            closeOptionsModal();
        }
        else if(radios[1].checked){
            console.log("moyen");
            evaluation = false;
            tabMot = tabMotMoyen;
            generateWord(tabMot);
            resetScore();
            resetInput();
            resetTimerTraining()
            badgeNiveau();
            titreTemps.innerHTML="Temps écoulé :";
            closeOptionsModal();
        }
        else{
            console.log("difficile");
            evaluation = false;
            tabMot = tabMotDifficile;
            generateWord(tabMot);
            resetScore();
            resetInput();
            resetTimerTraining()
            badgeNiveau();
            titreTemps.innerHTML="Temps écoulé :";
            closeOptionsModal();
        }
    }  
}

function modeEvaluation(){
    generateWord(tabMotDifficile);
    let h1 = document.getElementsByTagName('h1')[0];
    let input = document.getElementById('text-input');
    input.value="";
    h1.innerHTML = "Dactylo : évaluation";
    resetScore();
    clearTimeout(t);
    sec=0;
    min=1;
    hrs=0;
    showTime(hrs,min,sec);
    evaluation = true;
    tabMot = tabMotDifficile;
    badgeNiveau();
    titreTemps.innerHTML="Temps restant :"
    closeOptionsModal();
}

function resetScore(){
    goodWordScore = 0;
    deletedCaractScore = 0;
    goodCaractScore = 0;
    showScore(goodWordScore, goodCaractScore);
}

function resetInput(){
    let input = document.getElementById('text-input');
    input.textContent = "";
    input.disabled = false;
    input.placeholder="⤤ Saisir le mot ci-dessus ⤣";
}

function instructions(){
    let divInstructions = document.getElementById('instructions');
    divInstructions.innerHTML = "Instructions : dès que vous commencerez à écrire le mot, le chronomètre démarrera."
    setTimeout(generateRandomInstruction(), 10000);
}

function generateRandomInstruction(){
    let divInstructions = document.getElementById('instructions');
    setInterval(function(){
        let i = 0;
        divInstructions.classList.add('pre-animation');
        divInstructions.innerHTML = "Conseil : "+tabConseils[Math.floor(Math.random()* tabConseils.length)];
        setTimeout(function(){
            divInstructions.classList.remove('pre-animation')
        },700)
    }, 10000);
}

function listener(){
    let input = document.getElementById('text-input');
    input.addEventListener("input", checkInputText);
    let difficultyInput = document.getElementById('form-difficulty');
    difficultyInput.addEventListener('submit',  function(event){
        event.preventDefault();
        if(confirm("Changer la difficulté vous fera perdre votre progression actuelle. Continuer ?")){
            choixEntrainement();
        }
    });
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

function generateWord(tabMot){
    let divMots = document.getElementById('mots-a-saisir');
    divMots.classList.add('pre-animation');
    let randomGeneratedWord = tabMot[Math.floor(Math.random() * tabMot.length)];

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
    let regexOnlyLetters = /^[A-zÀ-ú\-]+$/;

    for(let i = 0; i < randomWord.length; i++){
        if(inputValue == randomWord){
            goodCaractScore++;
        }
        else if(!inputValue.match(regexOnlyLetters)){
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
        generateWord(tabMot);
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
    animationEmoji();
    restart();
    input.placeholder = 'Consultez votre score';
}

function animationEmoji(){
    let bodyLastChild = document.querySelector('body');
    let scriptAnimation = document.createElement('script');
    scriptAnimation.src = "./animation.js";
    bodyLastChild.appendChild(scriptAnimation);
}

function restart(){
    let btnReplay = document.createElement('button');
    let scoreDiv = document.getElementById('score');
    btnReplay.innerHTML = "Recommencer";
    btnReplay.id = "btn-replay";
    btnReplay.style.cursor = "pointer";
    btnReplay.setAttribute('onclick', 'openRestartModal');
    scoreDiv.appendChild(btnReplay);
}

function choixRecommencer(){
    let radios = document.forms["form-restart"].elements["restart"];
    let submit = document.getElementById('form-restart-submit');
    submit.addEventListener("click", function(event){
        event.preventDefault();
        for(element in radios) {
            if(radios[0].checked){
                location.reload();
            }
            if(radios[1].checked){
                resetScore();
                resetInput();
                closeModal();
                modeEvaluation();
            }
        }
    });
}

listener();


// TODO : 
// éval => difficulté max
// modal entrainement  évaluation
// replay -> timer ne fonctionne pas