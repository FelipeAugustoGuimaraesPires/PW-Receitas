const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


button.addEventListener('click', abrirPopup)

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
})

function abrirPopup() {
    popup.style.display = 'block';
}

function mostrarSenha() {
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('olhoaberto')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
     }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
     }

}