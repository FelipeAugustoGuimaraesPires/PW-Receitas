const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


botao_cadastro.addEventListener('click', abrirPopup)

closeButton.addEventListener('click',()=> {
    popup.style.display='none';
})

function abrirPopup(){
    popup.style.display='block';
    alert("Você clicou na div!");

}