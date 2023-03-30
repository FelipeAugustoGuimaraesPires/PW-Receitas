const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


button.addEventListener('click', abrirPopup)

closeButton.addEventListener('click',()=> {
    popup.style.display='none';
})

function abrirPopup(){
   popup.style.display='block';
    

}

console.log("sla")