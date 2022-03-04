let optionsModal = document.getElementById('modal-options');
let btnOption = document.getElementById('btn-options');
let containerHtml = document.getElementsByClassName('container')[0];


function openOptionsModal(){
    optionsModal.style.display = "block";
    containerHtml.style.filter = "blur(10px)";
}

function closeOptionsModal(){
    optionsModal.style.display = "none";
    containerHtml.style.filter = "none";
}

window.onclick = function(event){
    if(event.target == optionsModal){
        optionsModal.style.display = "none";
        containerHtml.style.filter = "none";
    }
}