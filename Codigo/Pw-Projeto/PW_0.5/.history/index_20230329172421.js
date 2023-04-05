const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


botao_cadastro.addEventListener('click', abrir_popup)

closeButton.addEventListener('click',()=> {
    popup.style.display='none';
})

function abrir_popup(){
    popup.style.display='block';
    alert("Você clicou na div!");

}