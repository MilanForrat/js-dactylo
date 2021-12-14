let modal = document.getElementById("restart-modal");
let btnRestart = document.getElementById("btn-replay");
let spanClose = document.getElementsByClassName("close")[0];
let container = document.getElementsByClassName('container')[0];

spanClose.onclick = closeModal();

function openModal(){
    modal.style.display = "block";
    container.style.filter = "blur(10px)";
    choixRecommencer();
}

function closeModal(){
    modal.style.display = "none";
    container.style.filter = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
       container.style.filter = "none";
    }
}