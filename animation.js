const containerSlot = document.querySelector('.slot');


const emoji = ["👍", "😁", "🙌", "👏", "💪", "😎", "🥳", "✔", "🎉", "🎁", "🤪", "🙃", "🌟", "🔥", "✍", "💡"];
fiesta();
function fiesta(){
    // si l'animation est en cours d'éxécution, alors ne fais rien
    if(isTweening()) return;

    for(let i = 0; i < 100; i++){
        // je créé une div en html
        const confetti = document.createElement('div');
        // j'insère dans la div 1 emoji, au hasard parmi le tableau d'emoji
        confetti.innerText = emoji[Math.floor(Math.random() * emoji.length)];
        // j'ajoute ma div à la div html "slot" (je lui ajoute un enfant)
        containerSlot.appendChild(confetti);
    }

    animateConfetti();
}

function animateConfetti(){
    // on utilise Green Sock, la librarie d'animation JS
    const TLCONF = gsap.timeline();

    TLCONF
    // je prends toutes mes slots div... et je leur mets uine animation de départ
    .to('.slot div', {
        // je les bouge sur Y (vertical) de -100 à 100 (exprimés en pixels)
        y: "random(-100,100)",
        // je les bouge sur X (horizontal) de -100 à 100
        x: "random(-100,100)",
        // je les bouge sur Z (perspective) de -1000 à 1000 (on a définit notre perspective dans le css)
        z: "random(-1000,1000)",

        // faire touner les émojis (exprimé en degrés)
        rotation: "random(-90,90)",
        // temps de l'animation
        duration: 3
    })
    // animation de fin
    // autoAlpha gère l'opacité et la visibilité en une propriété
    // duration gère le temps que met l'animation de fin exprimé en s
    .to('.slot div', {autoAlpha: 0, duration: 1.5}, '-=0.2')

    // il faut nettoyer le DOM pour éviter d'avoir les confettis sur le navigateur inutilement
    .add(() => {
        // je vide le contenu du container
        containerSlot.innerHTML ="";
    })
}

// fonction qui renvoit true si l'animation est en cours
function isTweening(){
    return gsap.isTweening('.slot div');
}