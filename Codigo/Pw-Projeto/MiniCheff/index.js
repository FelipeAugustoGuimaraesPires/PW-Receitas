const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');
const hamburgLado = document.getElementById('.overlay');
const closeHamburg = document.querySelector('.closebtn');
const botaoLat = document.getElementById('headerHamburg');
/* overlaycontent = #hamburgLateral */
/* nav button =  headerHamburg*/

button.addEventListener('click', abrirPopup)

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

function abrirPopup() {
    popup.style.display = 'block';
};



function mostrarSenha() {
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('olhoaberto')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }

}

popup.addEventListener('click', () => {
    modal.classList.toggle('animar');
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(this.mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activaClass = 'active';

        this.handleClick = this.handleClick.bind();

    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Hey"))

    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
};

