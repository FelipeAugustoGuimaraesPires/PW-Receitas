const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');
const navHeader2 = new NavigationHeader2();



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
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }

}

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
}

class NavigationHeader2 {
    constructor() {
      this.navigation_header2  = document.querySelector('.navigation_header2 ');
      window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          this.navigation_header2 .classList.add('navigation_header2 -hidden');
        } else {
          this.navigation_header2 .classList.remove('navigation_header2 -hidden');
        }
      });
    }
  }
  