const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


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



const button2 = document.getElementById("headerHamburg");
const menu = document.getElementById("myNav");

function toggleMenu() {
  menu.classList.toggle("show");
}

button2.addEventListener("click", toggleMenu);

function closeNav() {
  menu.classList.remove("show");
}


let posicaoInicial = 0;
const slidesPorVez = 3;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function mudarSlide(direcao) {
  posicaoInicial += direcao * slidesPorVez;

  if (posicaoInicial < 0) {
    posicaoInicial = totalSlides - slidesPorVez;
  }

  if (posicaoInicial >= totalSlides) {
    posicaoInicial = 0;
  }

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.transform = `translateX(-${posicaoInicial * (100 / slidesPorVez)}%)`;
  }
}


const menuBtn = document.querySelector('#headerHamburg');
const menuContainer = document.querySelector('.menu-container');
const closeMenuBtn = document.querySelector('#closeMenuBtn');

menuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');

function abrirPopup2() {
  document.getElementById("popup2").style.display = "block";
}

function fecharPopup2() {
  document.getElementById("popup2").style.display = "none";
}

function enviarReceita2() {
 
  alert("Receita enviada com sucesso!");
  fecharPopup2();
}
