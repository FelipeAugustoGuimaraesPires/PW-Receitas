const button = document.querySelector('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


botao_cadastro.addEventListener('click',()=> {
        popup.style.display='block';

})
closeButton.addEventListener('click',()=> {
    popup.style.display='none';
})